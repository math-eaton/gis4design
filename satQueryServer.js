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

// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const SPACETRACK_USERNAME = process.env.SPACETRACK_USERNAME;
const SPACETRACK_PASSWORD = process.env.SPACETRACK_PASSWORD;
if (!SPACETRACK_USERNAME || !SPACETRACK_PASSWORD) {
    throw new Error("Space-Track credentials are not set.");
}

const CELESTRAK_API = 'https://celestrak.org/NORAD/elements/gp.php';
const SPACETRACK_API = 'https://www.space-track.org';
const CACHE_DIR = path.join(__dirname, 'cache');
const GROUPS_FILE = path.join(__dirname, 'groups.json');
const TIMESTAMPS_FILE = path.join(CACHE_DIR, 'timestamps.json');
const PORT = process.env.PORT || 3000;

let spaceTrackCookie = null;

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Load group definitions
const groups = JSON.parse(fs.readFileSync(GROUPS_FILE, 'utf-8'));

// Login to Space-Track
async function loginToSpaceTrack() {
    try {
        const response = await axios.post(
            `${SPACETRACK_API}/ajaxauth/login`,
            `identity=${encodeURIComponent(SPACETRACK_USERNAME)}&password=${encodeURIComponent(SPACETRACK_PASSWORD)}`,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        if (response.status === 200) {
            spaceTrackCookie = response.headers['set-cookie'][0].split(';')[0];
            console.log("Successfully logged in to Space-Track.");
            return true;
        }
    } catch (error) {
        console.error("Space-Track login failed:", error.message);
    }
    return false;
}

// Fetch GP Data from Space-Track
async function fetchSpaceTrackData() {
    if (!spaceTrackCookie && !(await loginToSpaceTrack())) {
        throw new Error('Failed to authenticate with Space-Track.');
    }
    try {
        const response = await axios.get(
            `${SPACETRACK_API}/basicspacedata/query/class/gp/decay_date/null-val/epoch/%3Enow-30/orderby/norad_cat_id/format/json`,
            { headers: { Cookie: spaceTrackCookie } }
        );
        return response.data.map((gp) => ({
            catalogNumber: gp.NORAD_CAT_ID.toString(),
            name: gp.OBJECT_NAME,
            tleLine1: gp.TLE_LINE1 || null,
            tleLine2: gp.TLE_LINE2 || null,
            orbitClass: determineOrbitClass(gp.TLE_LINE1, gp.TLE_LINE2),
            country: gp.COUNTRY_CODE || 'Unknown',
            objType: gp.OBJECT_TYPE || 'Unknown',
            // satrec: createSatrec(gp.TLE_LINE1, gp.TLE_LINE2),
        }));
    } catch (error) {
        console.error('Error fetching GP data from Space-Track:', error.message);
        throw error;
    }
}

// Fetch Data from CelesTrak
async function fetchCelesTrakGroupData(apiQuery) {
    const url = `${CELESTRAK_API}?GROUP=${apiQuery}&FORMAT=JSON`;
    try {
        const response = await axios.get(url);
        return response.data.map((satellite) => ({
            catalogNumber: satellite.NORAD_CAT_ID.toString(),
            name: satellite.OBJECT_NAME,
            api: apiQuery,
        }));
    } catch (error) {
        console.error(`Error fetching data for group "${apiQuery}" from CelesTrak:`, error.message);
        return [];
    }
}

// Merge Space-Track and CelesTrak Data
async function mergeData(apiQuery) {
    const spaceTrackData = await fetchSpaceTrackData();
    const celestrakData = await fetchCelesTrakGroupData(apiQuery);

    // Filter and merge matched records based on catalogNumber
    const mergedData = celestrakData
        .filter((celestrakItem) =>
            spaceTrackData.some((spaceTrackItem) => spaceTrackItem.catalogNumber === celestrakItem.catalogNumber)
        )
        .map((celestrakItem) => {
            const spaceTrackItem = spaceTrackData.find(
                (item) => item.catalogNumber === celestrakItem.catalogNumber
            );
            return {
                name: spaceTrackItem.name,
                tleLine1: spaceTrackItem.tleLine1,
                tleLine2: spaceTrackItem.tleLine2,
                country: spaceTrackItem.country,
                objType: spaceTrackItem.objType,
                orbitClass: spaceTrackItem.orbitClass,
            };
        });

    return mergedData;
}

// Cache and Save Data
async function cacheGroupData(groupMajor) {
    const timestamps = JSON.parse(fs.existsSync(TIMESTAMPS_FILE) ? fs.readFileSync(TIMESTAMPS_FILE, 'utf-8') : '{}');
    const now = Date.now();

    const minorGroups = groups.filter((g) => g.group_major === groupMajor);
    const data = {};

    for (const minorGroup of minorGroups) {
        if (isCacheExpired(minorGroup.api)) {
            console.log(`Re-caching data for group_minor: "${minorGroup.api}"`);
            const mergedData = await mergeData(minorGroup.api);
            data[minorGroup.group_minor] = mergedData; // Group by group_minor
            timestamps[minorGroup.api] = now; // Update timestamp for the minor group
        } else {
            console.log(`Using cached data for group_minor: "${minorGroup.api}"`);
            const cacheFile = path.join(CACHE_DIR, `${minorGroup.api.toLowerCase()}.json`);
            if (fs.existsSync(cacheFile)) {
                const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
                data[minorGroup.group_minor] = cachedData.data; // Add cached satellites under group_minor
            }
        }
    }

    // Save consolidated data for group_major
    const cacheFile = path.join(CACHE_DIR, `${groupMajor.toLowerCase().replace(/\s+/g, '_')}.json`);
    fs.writeFileSync(cacheFile, JSON.stringify({ group_major: groupMajor, data }, null, 2));
    console.log(`Cached data for group_major: "${groupMajor}" at ${cacheFile}`);

    // Save updated timestamps
    fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(timestamps, null, 2));
}


// Determine Orbit Class
function determineOrbitClass(tleLine1, tleLine2) {
    try {
        const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
        const inclination = satrec.inclo * (180 / Math.PI);
        const period = (2 * Math.PI) / satrec.no;

        if (Math.abs(inclination) < 0.1 && Math.abs(period - 1436) < 1) return 'geostationary';
        if (Math.abs(period - 1436) < 10) return 'geosynchronous';
        if (Math.abs(inclination - 98) < 2 && Math.abs(period - 100) < 5) return 'sunSynchronous';
        return 'nonGeostationary';
    } catch {
        return 'unknown';
    }
}



// Endpoint to Serve Group Data
app.get('/satellites/:group_major', async (req, res) => {
    const { group_major } = req.params;

    try {
        const cacheFile = path.join(CACHE_DIR, `${group_major.toLowerCase().replace(/\s+/g, '_')}.json`);
        if (!fs.existsSync(cacheFile)) {
            return res.status(404).send('No cached data available.');
        }

        const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
        res.json(cachedData);
    } catch (error) {
        console.error(`Error serving data for group_major "${group_major}":`, error.message);
        res.status(500).send('Error fetching data.');
    }
});

// Re-cache all data on server startup
async function recacheAllGroups() {
    const now = Date.now();
    const eightHours = 8 * 60 * 60 * 1000 + 1;

    // Find the oldest timestamp across all groups
    const timestamps = JSON.parse(fs.existsSync(TIMESTAMPS_FILE) ? fs.readFileSync(TIMESTAMPS_FILE, 'utf-8') : '{}');
    const oldestTimestamp = Math.min(...Object.values(timestamps));

    if (now - oldestTimestamp > eightHours) {
        console.log('Triggering re-caching at the major group level.');
        const majorGroups = [...new Set(groups.map((g) => g.group_major))];
        for (const majorGroup of majorGroups) {
            console.log(`Re-caching data for group_major: "${majorGroup}"`);
            await cacheGroupData(majorGroup);
        }
    } else {
        console.log('No re-caching needed. All timestamps are within the last 4 hours.');
    }
}

function initializeTimestamps() {
    if (!fs.existsSync(TIMESTAMPS_FILE)) {
        console.log('No timestamps file found. Creating a new one.');
        const initialTimestamps = groups.reduce((acc, group) => {
            acc[group.api] = 0; // Initialize all timestamps to 0
            return acc;
        }, {});
        fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(initialTimestamps, null, 2));
        console.log('Timestamps file created.');
    }
}


function isCacheExpired(apiQuery) {
    console.log(`Checking if cache is expired for: ${apiQuery}`);
    const timestamps = JSON.parse(fs.existsSync(TIMESTAMPS_FILE) ? fs.readFileSync(TIMESTAMPS_FILE, 'utf-8') : '{}');
    const lastUpdated = timestamps[apiQuery] || 0;
    const eightHours = 4 * 60 * 60 * 1000;
    return Date.now() - lastUpdated > eightHours;
}

app.get('/timestamps', (req, res) => {
    try {
        if (!fs.existsSync(TIMESTAMPS_FILE)) {
            return res.status(404).send('Timestamps file not found.');
        }
        const timestamps = JSON.parse(fs.readFileSync(TIMESTAMPS_FILE, 'utf-8'));
        res.json(timestamps);
    } catch (error) {
        console.error('Error serving timestamps:', error.message);
        res.status(500).send('Error fetching timestamps.');
    }
});


// Start Server
app.listen(PORT, () => {
    initializeTimestamps();
    recacheAllGroups()
    .then(() => console.log('Re-caching completed on server startup for expired groups.'))
    .catch((error) => console.error('Error during re-caching:', error.message));
    console.log(`Server running at http://localhost:${PORT}/satellites/:group_major`);
});
