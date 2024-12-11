import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import * as satellite from 'satellite.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables in local development
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Ensure credentials are available
const spacetrackUsername = process.env.SPACETRACK_USERNAME;
const spacetrackPassword = process.env.SPACETRACK_PASSWORD;

if (!spacetrackUsername || !spacetrackPassword) {
    throw new Error("Space-Track credentials are not set. Please configure environment variables.");
}

const port = process.env.PORT || 3000;
const CACHE_DIR = path.join(__dirname, 'cache');
const TIMESTAMPS_FILE = path.join(CACHE_DIR, 'timestamps.json');

let spaceTrackCookie = null; // Store the session cookie

// Load or initialize timestamps
function getTimestamps() {
    if (fs.existsSync(TIMESTAMPS_FILE)) {
        return JSON.parse(fs.readFileSync(TIMESTAMPS_FILE, 'utf-8'));
    }
    const initialTimestamps = {
        PAYLOAD: 0,
        'ROCKET BODY': 0,
        DEBRIS: 0,
    };
    fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(initialTimestamps, null, 2));
    return initialTimestamps;
}

// Update timestamp for a specific type
function updateTimestamp(objectType) {
    const timestamps = getTimestamps();
    timestamps[objectType] = Date.now();
    fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(timestamps, null, 2));
}


// Login to Space-Track and get a session cookie
async function loginToSpaceTrack() {
    try {
        const response = await axios.post(
            "https://www.space-track.org/ajaxauth/login",
            `identity=${encodeURIComponent(spacetrackUsername)}&password=${encodeURIComponent(spacetrackPassword)}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        if (response.status === 200) {
            console.log("Successfully logged in to Space-Track.");
            const setCookieHeader = response.headers['set-cookie'];
            if (setCookieHeader) {
                spaceTrackCookie = setCookieHeader[0].split(';')[0]; // Extract the session cookie
                return true;
            }
        }
        console.error("Failed to obtain session cookie.");
        return false;
    } catch (error) {
        console.error("Error logging in to Space-Track:", error);
        return false;
    }
}


async function fetchGPDataByType(objectType) {
    if (!spaceTrackCookie) {
        const loggedIn = await loginToSpaceTrack();
        if (!loggedIn) {
            throw new Error("Failed to log in to Space-Track.");
        }
    }

    try {
        console.log(`Fetching GP data for type: ${objectType}`);
        const response = await axios.get(
            "https://www.space-track.org/basicspacedata/query/class/gp/decay_date/null-val/epoch/%3Enow-30/orderby/norad_cat_id/format/json",
            {
                headers: {
                    "Cookie": spaceTrackCookie,
                },
            }
        );

        const normalizedObjectType = objectType.toUpperCase();

        const filteredData = response.data
            .filter(gp => gp.OBJECT_TYPE?.toUpperCase() === normalizedObjectType)
            .map(gp => {
                const orbitClass = determineOrbitClass(gp.TLE_LINE1, gp.TLE_LINE2); // Compute orbit class
                return {
                    name: gp.OBJECT_NAME,
                    catalogNumber: gp.NORAD_CAT_ID.toString(),
                    tleLine1: gp.TLE_LINE1 || null,
                    tleLine2: gp.TLE_LINE2 || null,
                    country: gp.COUNTRY_CODE || "Unknown",
                    objType: gp.OBJECT_TYPE || "Unknown",
                    orbitClass, // Add computed orbit class
                };
            });

        console.log(`Filtered ${filteredData.length} items for ${objectType}`);

        const cacheFile = path.join(CACHE_DIR, `${objectType.toLowerCase().replace(/\s+/g, '_')}.json`);
        fs.writeFileSync(cacheFile, JSON.stringify(filteredData, null, 2));
        console.log(`${objectType} Data Cached at ${cacheFile}`);

        // Update timestamp for this type
        updateTimestamp(objectType);

        return filteredData;
    } catch (error) {
        console.error(`Error fetching ${objectType} data from Space-Track:`, error);

        // Force re-login if cookie is invalid
        if (error.response && error.response.status === 401) {
            console.log("Session expired. Re-logging in...");
            spaceTrackCookie = null; // Clear invalid cookie
            return fetchGPDataByType(objectType); // Retry fetching data
        }

        throw error;
    }
}

// Load Cached Data by Type
function loadCachedDataByType(objectType) {
    const cacheFile = path.join(CACHE_DIR, `${objectType.toLowerCase().replace(/\s+/g, '_')}.json`);
    console.log(`Loading cache from: ${cacheFile}`);
    if (fs.existsSync(cacheFile)) {
        const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
        console.log(`Loaded ${cachedData.length} items from cache for ${objectType}`);
        return cachedData;
    }
    console.warn(`Cache file not found for ${objectType}`);
    return [];
}

// Check if Cache Needs Update
function isCacheExpired(objectType) {
    const timestamps = getTimestamps();
    const timestamp = timestamps[objectType];
    const oneHourInMillis = 60 * 60 * 1000;
    return (Date.now() - timestamp) > oneHourInMillis; // Update hourly
}

// Serve Data by Object Type
app.get('/satellites/:type', async (req, res) => {
    const { type } = req.params;
    const validTypes = ['PAYLOAD', 'ROCKET BODY', 'DEBRIS'];
    if (!validTypes.includes(type.toUpperCase())) {
        return res.status(400).send("Invalid object type. Must be PAYLOAD, ROCKET BODY, or DEBRIS.");
    }

    try {
        let data = loadCachedDataByType(type.toUpperCase());

        if (isCacheExpired(type.toUpperCase())) {
            console.log(`Updating ${type} Data...`);
            data = await fetchGPDataByType(type.toUpperCase());
        } else {
            console.log(`Using cached ${type} data.`);
        }

        res.json(data); // Only send satellite data
    } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
        res.status(500).send(`Error fetching ${type} data`);
    }
});

// Serve Universal Timestamp
app.get('/timestamp', (req, res) => {
    try {
        const timestamps = getTimestamps();
        res.json(timestamps); // Serve all timestamps
    } catch (error) {
        console.error('Error fetching timestamps:', error);
        res.status(500).send('Error fetching timestamps');
    }
});

// Metadata Endpoint: Return the most recent cache timestamp across all types
app.get('/satellites', (req, res) => {
    try {
        const timestamps = Object.values(TIMESTAMP_FILES)
            .map(file => {
                if (fs.existsSync(file)) {
                    const { timestamp } = JSON.parse(fs.readFileSync(file, 'utf-8'));
                    return timestamp;
                }
                return 0; // Default to 0 if file doesn't exist
            });

        const latestTimestamp = Math.max(...timestamps);

        res.json({ timestamp: latestTimestamp }); // Respond with the most recent timestamp
    } catch (error) {
        console.error('Error fetching metadata:', error);
        res.status(500).send('Error fetching metadata');
    }
});

// Ensure Cache Directory Exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function determineOrbitClass(tleLine1, tleLine2) {
    try {
        const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
        const inclination = satrec.inclo * (180 / Math.PI); // Convert inclination to degrees
        const period = (2 * Math.PI) / satrec.no; // Orbital period in minutes

        if (Math.abs(inclination) < 0.1 && Math.abs(period - 1436) < 1) return 'geostationary';
        if (Math.abs(period - 1436) < 10) return 'geosynchronous';
        if (Math.abs(inclination - 98) < 2 && Math.abs(period - 100) < 5) return 'sunSynchronous';
        return 'nonGeostationary';
    } catch (error) {
        console.error('Failed to determine orbit class:', error);
        return 'unknown';
    }
}


// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/satellites/:type`);
});
