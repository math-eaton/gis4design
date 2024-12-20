import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import * as satellite from 'satellite.js';
import { spawn } from 'child_process';

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
const CONSOLIDATED_CACHE_FILE = path.join(CACHE_DIR, 'consolidated_satellites.json');
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
        // if (Math.abs(period - 1436) < 10) orbitClasses.push('geosynchronous');
        if (Math.abs(inclination - 98) < 2 && Math.abs(period - 100) < 5) orbitClasses.push('sun synchronous');


        // Classify non-geostationary orbits by period / altitude todo - refine VLEO description
        // if (period <= 120 && altitude < 100) orbitClasses.push('very low earth'); // VLEO (altitude 100-450 km)
        if (period < 225) orbitClasses.push('low earth'); // LEO (altitude 450-2000 km)
        if (period >= 225 && period < 1440 && altitude < 35786) orbitClasses.push('medium earth'); // MEO (altitude 2000-35786 km)
        if (period >= 1440 && altitude >= 35786) orbitClasses.push('high earth'); // HEO (altitude > 35786 km)

        // Additional classifications
        // if (Math.abs(inclination - 90) < 5) orbitClasses.push('polarOrbit'); // Polar Orbits (inclination close to 90°)
        // if (eccentricity > 0.1 && period > 600) orbitClasses.push('highlyEllipticalOrbit'); // Highly Elliptical Orbit (HEO)
        // if (Math.abs(inclination - 63.4) < 1 && Math.abs(period - 720) < 10) orbitClasses.push('molniyaOrbit'); // Molniya Orbit
        // if (eccentricity < 0.01) orbitClasses.push('circularOrbit'); // Circular Orbit
        // if (Math.abs(inclination) < 0.1 && period > 1436) orbitClasses.push('graveyardOrbit'); // Graveyard Orbit

        return orbitClasses.length > 0 ? orbitClasses : ['other'];
    } catch {
        return ['unknown'];
    }
}

// Preprocess Space-Track data using Python script
async function preprocessSpaceTrackData(spaceTrackData) {
    const outputFile = path.join(CACHE_DIR, 'spacetrack_processed.json');

    // Check if the processed file already exists
    if (fs.existsSync(outputFile)) {
        console.log("cleaned output exists");
        const processedData = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
        return processedData;
    }

    // If it doesn't exist, then run the preprocessing
    const inputFile = path.join(CACHE_DIR, 'spacetrack_raw.json');

    // Write raw spaceTrackData to a file
    fs.writeFileSync(inputFile, JSON.stringify(spaceTrackData, null, 2));

    // Run Python script
    await runPythonPreprocessing(inputFile, outputFile, 'scripts/cleanCountry.py');

    // Read back the processed data
    const processedData = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
    return processedData;
}

// Run a generic Python preprocessing script
function runPythonPreprocessing(inputFile, outputFile, scriptPath) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', [scriptPath, inputFile, outputFile]);

        pythonProcess.stdout.on('data', (data) => {
            console.log(`Python STDOUT: ${data.toString()}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Python STDERR: ${data.toString()}`);
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Python process exited with code ${code}`));
            }
        });
    });
}

// Fetch Space-Track Data (after preprocessing)
async function fetchSpaceTrackData() {
    // Convert staticSpaceTrackData into a simpler form
    const simpleData = staticSpaceTrackData.map((gp) => ({
        catalogNumber: gp.catalogNumber,
        country: gp.country || 'Unknown',
    }));

    // Preprocess the data via Python before returning
    const processedData = await preprocessSpaceTrackData(simpleData);
    return processedData;
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
    const spaceTrackData = await fetchSpaceTrackData();
    console.log("Space-Track data preprocessed and loaded successfully.");

    const allData = {};

    for (const group of groups) {
        const celestrakData = await fetchCelesTrakGroupData(group.api);

        console.log(`Processing ${celestrakData.length} satellites from group: ${group.api}`);
        celestrakData.forEach((celestrakItem) => {
            const catalogNumber = celestrakItem.catalogNumber;
            const spaceTrackItem = spaceTrackData.find((item) => item.catalogNumber === catalogNumber);

            if (!allData[catalogNumber]) {
                allData[catalogNumber] = {
                    catalogNumber: catalogNumber,
                    name: celestrakItem.name,
                    tleLine1: celestrakItem.tleLine1,
                    tleLine2: celestrakItem.tleLine2,
                    orbitClass: new Set(celestrakItem.orbitClass),
                    ISO3: spaceTrackItem?.country || "Unknown",
                    country: spaceTrackItem?.country_full || "Unknown",
                    continent: spaceTrackItem?.continent || "Unknown",
                    group_major: new Set(),
                    group_minor: new Set(),
                    constellation: null,
                };
            }

            celestrakItem.orbitClass.forEach((oc) => allData[catalogNumber].orbitClass.add(oc));
            allData[catalogNumber].group_major.add(group.group_major);

            if (group.group_major !== "Active") {
                allData[catalogNumber].group_minor.add(group.api);
            }

            if (CONSTELLATIONS.has(group.api)) {
                allData[catalogNumber].constellation = group.api;
            }
        });
    }

    console.log("Consolidation complete. Sorting by catalog number...");
    return Object.values(allData)
        .map((sat) => ({
            ...sat,
            orbitClass: Array.from(sat.orbitClass),
            group_major: Array.from(sat.group_major),
            group_minor: Array.from(sat.group_minor),
            constellation: sat.constellation,
        }))
        .sort((a, b) => parseInt(a.catalogNumber, 10) - parseInt(b.catalogNumber, 10)); // Sort by catalog number
}

function initializeTimestamp() {
    if (!fs.existsSync(TIMESTAMP_FILE)) {
        console.log('No timestamp file found. Creating a new one.');
        const initialTimestamp = groups.reduce((acc, group) => {
            acc[group.api] = 0; 
            return acc;
        }, {});
        fs.writeFileSync(TIMESTAMP_FILE, JSON.stringify(initialTimestamp, null, 2));
        console.log('timestamp file created.');
    }
}

async function saveConsolidatedDataToCache() {
    const consolidatedData = await consolidateData();

    const now = Date.now();
    // After consolidation, we can write directly since it's already preprocessed at the source step
    fs.writeFileSync(CONSOLIDATED_CACHE_FILE, JSON.stringify(consolidatedData, null, 2));
    fs.writeFileSync(TIMESTAMP_FILE, JSON.stringify({ lastCached: now }));
    console.log(`Consolidated data cached at ${new Date(now).toISOString()}`);
}

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

app.get('/satellites', async (req, res) => {
    try {
        console.log("Received request to /satellites endpoint.");

        // Check if cache is expired or missing
        if (isCacheExpired() || !fs.existsSync(CONSOLIDATED_CACHE_FILE)) {
            console.log("Cache expired or missing. Refreshing cache...");
            await saveConsolidatedDataToCache();
        } else {
            console.log("Serving data from cache.");
        }

        // Load cached data
        const cachedData = JSON.parse(fs.readFileSync(CONSOLIDATED_CACHE_FILE, 'utf-8'));

        // Parse query parameters for pagination
        const page = parseInt(req.query.page, 10) || 1; // Default to page 1
        const size = parseInt(req.query.size, 10) || 500; // Default to 500 satellites per page

        // Validate pagination parameters
        if (page < 1 || size < 1) {
            return res.status(400).send('Invalid pagination parameters.');
        }

        // Calculate start and end indices for slicing
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;

        // Slice the data for the current page
        const paginatedData = cachedData.slice(startIndex, endIndex);

        // Return paginated data along with metadata
        res.json({
            metadata: {
                totalSatellites: cachedData.length,
                totalPages: Math.ceil(cachedData.length / size),
                currentPage: page,
                pageSize: size,
            },
            data: paginatedData,
        });
    } catch (error) {
        console.error('Error fetching consolidated data:', error.message);
        res.status(500).send('Error fetching data.');
    }
});

app.get('/timestamp', (req, res) => {
    if (!fs.existsSync(TIMESTAMP_FILE)) {
        // If timestamp.json doesn't exist, return a default response or null
        return res.json({ lastCached: null });
    }

    try {
        const timestampData = JSON.parse(fs.readFileSync(TIMESTAMP_FILE, 'utf-8'));
        res.json(timestampData);
    } catch (error) {
        console.error('Error reading timestamp file:', error);
        res.status(500).send('Error reading timestamp file.');
    }
});


app.listen(PORT, async () => {
    initializeTimestamp();
    console.log("Server starting...");
    if (isCacheExpired() || !fs.existsSync(CONSOLIDATED_CACHE_FILE)) {
        console.log("Initializing cache on startup...");
        await saveConsolidatedDataToCache();
    }
    console.log(`Server running at http://localhost:${PORT}/satellites`);
});
