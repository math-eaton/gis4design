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


const CELESTRAK_API = 'https://celestrak.org/NORAD/elements/gp.php';
const CACHE_DIR = path.join(__dirname, 'cache');
const GROUPS_FILE = path.join(__dirname, 'groups.json');
const SPACETRACK_STATIC_FILE = path.join(CACHE_DIR, 'spacetrack_static.json');
const TIMESTAMPS_FILE = path.join(CACHE_DIR, 'timestamps.json');
const PORT = process.env.PORT || 3000;

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Load group definitions
const groups = JSON.parse(fs.readFileSync(GROUPS_FILE, 'utf-8'));

// 

// Load static Space-Track data (ensure it's manually cached or included in your setup)
const staticSpaceTrackData = JSON.parse(fs.readFileSync(SPACETRACK_STATIC_FILE, 'utf-8'));


// Fetch GP Data from Space-Track
async function fetchSpaceTrackData() {
    try {
        return staticSpaceTrackData.map((gp) => ({
            catalogNumber: gp.catalogNumber,
            country: gp.country || 'Unknown',
        }));
    } catch (error) {
        console.error('Error parsing static Space-Track data:', error.message);
        throw error;
    }
}

// Fetch Data from CelesTrak
async function fetchCelesTrakGroupData(apiQuery) {
    const url = `${CELESTRAK_API}?GROUP=${apiQuery}&FORMAT=tle`;
    try {
        const response = await axios.get(url);
        const tleData = response.data.split('\n');
        const satellites = [];

        for (let i = 0; i < tleData.length; i += 3) {
            if (tleData[i] && tleData[i + 1] && tleData[i + 2]) {
                const name = tleData[i].trim();
                const tleLine1 = tleData[i + 1].trim();
                const tleLine2 = tleData[i + 2].trim();
                const orbitClass = determineOrbitClass(tleLine1, tleLine2);

                satellites.push({
                    catalogNumber: tleLine1.substring(2, 7).trim(),
                    name,
                    tleLine1,
                    tleLine2,
                    orbitClass,
                    api: apiQuery,
                });
            }
        }

        return satellites;
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
    const mergedData = celestrakData.map((celestrakItem) => {
        const spaceTrackItem = spaceTrackData.find(
            (item) => item.catalogNumber === celestrakItem.catalogNumber
        );

        return {
            catalogNumber: celestrakItem.catalogNumber,
            name: celestrakItem.name,
            tleLine1: celestrakItem.tleLine1,
            tleLine2: celestrakItem.tleLine2,
            orbitClass: celestrakItem.orbitClass,
            country: spaceTrackItem?.country || 'Unknown',
            api: celestrakItem.api,
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
        console.log('No re-caching needed. All timestamps are within the last eight hours.');
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
    const eightHours = 8 * 60 * 60 * 1000;
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
