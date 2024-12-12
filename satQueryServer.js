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

dotenv.config();

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

// Load static Space-Track data
const staticSpaceTrackData = JSON.parse(fs.readFileSync(SPACETRACK_STATIC_FILE, 'utf-8'));

// Fetch Data from CelesTrak
async function fetchCelesTrakGroupData(apiQuery) {
    const url = `${CELESTRAK_API}?GROUP=${apiQuery}&FORMAT=JSON`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for group "${apiQuery}" from CelesTrak:`, error.message);
        return [];
    }
}

// Merge Space-Track and CelesTrak Data
function mergeData(celestrakData) {
    return celestrakData.map((celestrakItem) => {
        const matchedSpaceTrackItem = staticSpaceTrackData.find(
            (item) => item.catalogNumber === celestrakItem.NORAD_CAT_ID.toString()
        );
        return {
            catalogNumber: celestrakItem.NORAD_CAT_ID.toString(),
            name: celestrakItem.OBJECT_NAME,
            tleLine1: celestrakItem.TLE_LINE1 || null,
            tleLine2: celestrakItem.TLE_LINE2 || null,
            country: matchedSpaceTrackItem?.country || 'Unknown',
        };
    });
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
            const celestrakData = await fetchCelesTrakGroupData(minorGroup.api);
            const mergedData = mergeData(celestrakData);
            data[minorGroup.group_minor] = mergedData;
            timestamps[minorGroup.api] = now;
        } else {
            console.log(`Using cached data for group_minor: "${minorGroup.api}"`);
            const cacheFile = path.join(CACHE_DIR, `${minorGroup.api.toLowerCase()}.json`);
            if (fs.existsSync(cacheFile)) {
                const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
                data[minorGroup.group_minor] = cachedData;
            }
        }
    }

    const cacheFile = path.join(CACHE_DIR, `${groupMajor.toLowerCase().replace(/\s+/g, '_')}.json`);
    fs.writeFileSync(cacheFile, JSON.stringify({ group_major: groupMajor, data }, null, 2));
    console.log(`Cached data for group_major: "${groupMajor}" at ${cacheFile}`);

    fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(timestamps, null, 2));
}

function isCacheExpired(apiQuery) {
    const timestamps = JSON.parse(fs.existsSync(TIMESTAMPS_FILE) ? fs.readFileSync(TIMESTAMPS_FILE, 'utf-8') : '{}');
    const lastUpdated = timestamps[apiQuery] || 0;
    const fourHours = 4 * 60 * 60 * 1000;
    return Date.now() - lastUpdated > fourHours;
}

// Endpoint to Serve Group Data
app.get('/satellites/:group_major', async (req, res) => {
    const { group_major } = req.params;

    try {
        const cacheFile = path.join(CACHE_DIR, `${group_major.toLowerCase().replace(/\s+/g, '_')}.json`);
        if (!fs.existsSync(cacheFile)) {
            await cacheGroupData(group_major);
        }
        const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
        res.json(cachedData);
    } catch (error) {
        console.error(`Error serving data for group_major "${group_major}":`, error.message);
        res.status(500).send('Error fetching data.');
    }
});

// Initialize Timestamps
function initializeTimestamps() {
    if (!fs.existsSync(TIMESTAMPS_FILE)) {
        const initialTimestamps = groups.reduce((acc, group) => {
            acc[group.api] = 0;
            return acc;
        }, {});
        fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(initialTimestamps, null, 2));
        console.log('Timestamps file created.');
    }
}

// Re-cache all data on server startup
async function recacheAllGroups() {
    const majorGroups = [...new Set(groups.map((g) => g.group_major))];
    for (const majorGroup of majorGroups) {
        console.log(`Re-caching data for group_major: "${majorGroup}"`);
        await cacheGroupData(majorGroup);
    }
}

// Start Server
app.listen(PORT, () => {
    initializeTimestamps();
    recacheAllGroups()
        .then(() => console.log('Re-caching completed on server startup.'))
        .catch((error) => console.error('Error during re-caching:', error.message));
    console.log(`Server running at http://localhost:${PORT}/satellites/:group_major`);
});
