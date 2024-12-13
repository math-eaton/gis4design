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
const TIMESTAMP_FILE = path.join(CACHE_DIR, 'timestamp.json');
const CONSOLIDATED_CACHE_FILE = path.join(CACHE_DIR, 'consolidated_data.json');
const PORT = process.env.PORT || 3000;

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Load group definitions
const groups = JSON.parse(fs.readFileSync(path.join(__dirname, 'groups.json'), 'utf-8'));

// Load static Space-Track data
const staticSpaceTrackData = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, 'spacetrack_static.json'), 'utf-8'));

// Determine Orbit Class
function determineOrbitClass(tleLine1, tleLine2) {
    try {
        const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
        const inclination = satrec.inclo * (180 / Math.PI); // Convert inclination to degrees
        const period = (2 * Math.PI) / satrec.no; // Orbital period in minutes
        const eccentricity = satrec.ecco; // Orbital eccentricity
        const altitude = (Math.cbrt(398600.4418 / Math.pow(satrec.no * 2 * Math.PI / 1440, 2)) - 6371); // Altitude in km

        const orbitClasses = [];

        if (Math.abs(inclination) < 0.1 && Math.abs(period - 1436) < 1) orbitClasses.push('geostationary');
        if (Math.abs(period - 1436) < 10) orbitClasses.push('geosynchronous');
        if (Math.abs(inclination - 98) < 2 && Math.abs(period - 100) < 5) orbitClasses.push('sunSynchronous');

        // Classify non-geostationary orbits by altitude
        if (altitude >= 100 && altitude < 450) orbitClasses.push('veryLowEarthOrbit'); // VLEO (altitude 100-450 km)
        if (altitude >= 450 && altitude < 2000) orbitClasses.push('lowEarthOrbit'); // LEO (altitude 450-2000 km)
        if (altitude >= 2000 && altitude < 35786) orbitClasses.push('mediumEarthOrbit'); // MEO (altitude 2000-35786 km)
        if (altitude > 35786) orbitClasses.push('highEarthOrbit'); // HEO (altitude > 35786 km)

        // Additional classifications
        if (Math.abs(inclination - 90) < 5) orbitClasses.push('polarOrbit'); // Polar Orbits (inclination close to 90°)
        if (eccentricity > 0.1 && period > 600) orbitClasses.push('highlyEllipticalOrbit'); // Highly Elliptical Orbit (HEO)
        if (Math.abs(inclination - 63.4) < 1 && Math.abs(period - 720) < 10) orbitClasses.push('molniyaOrbit'); // Molniya Orbit
        if (eccentricity < 0.01) orbitClasses.push('circularOrbit'); // Circular Orbit
        if (Math.abs(inclination) < 0.1 && period > 1436) orbitClasses.push('graveyardOrbit'); // Graveyard Orbit

        return orbitClasses.length > 0 ? orbitClasses : ['nonGeostationary'];
    } catch {
        return ['unknown'];
    }
}

// Fetch Space-Track Data
async function fetchSpaceTrackData() {
    return staticSpaceTrackData.map((gp) => ({
        catalogNumber: gp.catalogNumber,
        country: gp.country || 'Unknown',
    }));
}

// Fetch CelesTrak Data
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

// Map of constellations to their minor groups
const CONSTELLATIONS = new Set([
    "starlink",
    "oneweb",
    "iridium",
    "iridium-NEXT",
    "planet",
    "spire",
    "globalstar",
    "orbcomm",
    "intelsat",
    "ses",
    "eutelsat"
]);

// Consolidate Data
async function consolidateData() {
    console.log("Starting data consolidation...");
    const allData = {};
    const spaceTrackData = await fetchSpaceTrackData();
    console.log("Space-Track data loaded successfully.");

    for (const group of groups) {
        const celestrakData = await fetchCelesTrakGroupData(group.api);

        console.log(`Processing ${celestrakData.length} satellites from group: ${group.api}`);
        celestrakData.forEach((celestrakItem) => {
            const catalogNumber = celestrakItem.catalogNumber;
            const spaceTrackItem = spaceTrackData.find((item) => item.catalogNumber === catalogNumber);

            if (!allData[catalogNumber]) {
                allData[catalogNumber] = {
                    catalogNumber,
                    name: celestrakItem.name,
                    tleLine1: celestrakItem.tleLine1,
                    tleLine2: celestrakItem.tleLine2,
                    orbitClass: new Set(celestrakItem.orbitClass),
                    country: spaceTrackItem?.country || "Unknown",
                    group_major: new Set(),
                    group_minor: new Set(),
                    constellation: null // Default to null
                };
            }

            // Merge orbitClass and group_major
            celestrakItem.orbitClass.forEach((oc) => allData[catalogNumber].orbitClass.add(oc));
            allData[catalogNumber].group_major.add(group.group_major);

            // Merge group_minor, excluding "active" if it is in group_major
            if (group.group_major !== "Active") {
                allData[catalogNumber].group_minor.add(group.api);
            }

            // Assign constellation if group.api is in CONSTELLATIONS
            if (CONSTELLATIONS.has(group.api)) {
                allData[catalogNumber].constellation = group.api; // Set to the constellation name
            }
        });
    }

    console.log("Consolidation complete. Converting sets to arrays...");
    return Object.values(allData).map((sat) => ({
        ...sat,
        orbitClass: Array.from(sat.orbitClass),
        group_major: Array.from(sat.group_major),
        group_minor: Array.from(sat.group_minor),
        constellation: sat.constellation // Include the constellation attribute
    }));
}

function initializeTimestamp() {
    if (!fs.existsSync(TIMESTAMP_FILE)) {
        console.log('No timestamp file found. Creating a new one.');
        const initialTimestamp = groups.reduce((acc, group) => {
            acc[group.api] = 0; // Initialize all timestamp to 0
            return acc;
        }, {});
        fs.writeFileSync(TIMESTAMP_FILE, JSON.stringify(initialTimestamp, null, 2));
        console.log('timestamp file created.');
    }
}


// Save Consolidated Data to Cache
async function saveConsolidatedDataToCache() {
    const consolidatedData = await consolidateData();
    const now = Date.now();

    fs.writeFileSync(CONSOLIDATED_CACHE_FILE, JSON.stringify(consolidatedData, null, 2));
    fs.writeFileSync(TIMESTAMP_FILE, JSON.stringify({ lastCached: now }, null, 2));
    console.log(`Consolidated data cached at ${new Date(now).toISOString()}`);
}


// Check if Cache is Expired
function isCacheExpired() {
    if (!fs.existsSync(TIMESTAMP_FILE)) {
        console.log("No timestamp file found. Cache is expired.");
        return true;
    }

    const { lastCached } = JSON.parse(fs.readFileSync(TIMESTAMP_FILE, 'utf-8'));
    const eightHours = 8 * 60 * 60 * 1000;
    const isExpired = Date.now() - lastCached > eightHours;

    console.log(isExpired ? "Cache is expired. Re-caching required." : "Cache is valid. Using cached data.");
    return isExpired;
}


// Endpoint to Serve Consolidated Data
app.get('/satellites', async (req, res) => {
    try {
        console.log("Received request to /satellites endpoint.");
        if (isCacheExpired() || !fs.existsSync(CONSOLIDATED_CACHE_FILE)) {
            console.log("Cache expired or missing. Refreshing cache...");
            await saveConsolidatedDataToCache();
        } else {
            console.log("Serving data from cache.");
        }

        const cachedData = JSON.parse(fs.readFileSync(CONSOLIDATED_CACHE_FILE, 'utf-8'));
        res.json({ data: cachedData });
    } catch (error) {
        console.error('Error fetching consolidated data:', error.message);
        res.status(500).send('Error fetching data.');
    }
});

// Start Server
app.listen(PORT, async () => {
    initializeTimestamp();
    console.log("Server starting...");
    if (isCacheExpired() || !fs.existsSync(CONSOLIDATED_CACHE_FILE)) {
        console.log("Initializing cache on startup...");
        await saveConsolidatedDataToCache();
    }
    console.log(`Server running at http://localhost:${PORT}/satellites`);
});
