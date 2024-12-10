import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables from .env file in local development
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
const CACHE_FILE = path.join(__dirname, 'cachedSatellites.json');
const LAST_UPDATE_FILE = path.join(__dirname, 'lastUpdate.json');

let spaceTrackCookie = null; // Store the session cookie

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

// Fetch Latest GP Data
async function fetchGPData() {
    if (!spaceTrackCookie) {
        const loggedIn = await loginToSpaceTrack();
        if (!loggedIn) {
            throw new Error("Failed to log in to Space-Track.");
        }
    }

    try {
        const response = await axios.get(
            "https://www.space-track.org/basicspacedata/query/class/gp/decay_date/null-val/epoch/%3Enow-30/orderby/norad_cat_id/format/json",
            {
                headers: {
                    "Cookie": spaceTrackCookie,
                },
            }
        );

        const gpData = response.data.map(gp => ({
            name: gp.OBJECT_NAME,
            catalogNumber: gp.NORAD_CAT_ID.toString(),
            tleLine0: gp.TLE_LINE0 || null,
            tleLine1: gp.TLE_LINE1 || null,
            tleLine2: gp.TLE_LINE2 || null,
            country: gp.COUNTRY_CODE || "Unknown",
            objectType: gp.OBJECT_TYPE || "Unknown",
            launchDate: gp.LAUNCH_DATE || "Unknown",
            decayDate: gp.DECAY_DATE || null,
            inclination: gp.INCLINATION || null,
            apogee: gp.APOAPSIS || null,
            perigee: gp.PERIAPSIS || null,
            period: gp.PERIOD || null,
        }));

        fs.writeFileSync(CACHE_FILE, JSON.stringify(gpData, null, 2));
        console.log("GP Data Cached");
        return gpData;
    } catch (error) {
        console.error("Error fetching GP data from Space-Track:", error);

        // Force re-login if cookie is invalid
        if (error.response && error.response.status === 401) {
            console.log("Session expired. Re-logging in...");
            spaceTrackCookie = null; // Clear invalid cookie
            return fetchGPData(); // Retry fetching GP data
        }

        throw error;
    }
}

// Load Cached GP Data
function loadCachedGPData() {
    if (fs.existsSync(CACHE_FILE)) {
        return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    }
    return [];
}

// Check if Cache Needs Update
function isCacheExpired() {
    if (!fs.existsSync(LAST_UPDATE_FILE)) return true;

    const lastUpdate = JSON.parse(fs.readFileSync(LAST_UPDATE_FILE, 'utf-8')).timestamp;
    const oneHourInMillis = 60 * 60 * 1000;
    return (Date.now() - lastUpdate) > oneHourInMillis; // Update hourly
}

// Serve Cached or Updated GP Data
app.get('/satellites', async (req, res) => {
    try {
        let gpData = loadCachedGPData();

        if (isCacheExpired()) {
            console.log("Updating GP Data...");
            gpData = await fetchGPData();
            fs.writeFileSync(LAST_UPDATE_FILE, JSON.stringify({ timestamp: Date.now() }, null, 2));
        } else {
            console.log("Using cached GP data.");
        }

        res.json({ timestamp: Date.now(), satellites: gpData });
    } catch (error) {
        console.error("Error fetching satellite data:", error);
        res.status(500).send("Error fetching satellite data");
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/satellites`);
});
