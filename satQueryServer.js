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

// ------------------- CONFIG & CONSTANTS -------------------

// Adjust these as needed:
const CELESTRAK_API = 'https://celestrak.org/NORAD/elements/gp.php';
const SPACETRACK_API = 'https://www.space-track.org';
const CACHE_DIR = path.join(__dirname, 'public/data');
const TIMESTAMP_FILE = path.join(CACHE_DIR, 'timestamp.json');
const CONSOLIDATED_CACHE_FILE = path.join(CACHE_DIR, 'consolidated_satellites.json');

// If running on a server, set your port. If just a cron script, you may not need Express.
const PORT = process.env.PORT || 3000;

// Credentials for Space-Track
const { SPACETRACK_USERNAME, SPACETRACK_PASSWORD } = process.env;
let spaceTrackCookie = null;

// Adjust the caching interval. 25 hours in milliseconds:
const CACHE_EXPIRATION_MS = 25 * 60 * 60 * 1000; // 25 hours

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Load group definitions
const groups = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'groups.json'), 'utf-8')
);

// A set of known constellations
const CONSTELLATIONS = new Set([
  'starlink',
  'oneweb',
  'iridium',
  'iridium-NEXT',
  'planet',
  'spire',
  'globalstar',
  'orbcomm',
  'intelsat',
  'ses',
  'eutelsat'
]);

// ------------------- HELPER FUNCTIONS -------------------

// Determine Orbit Class
// GM for Earth: ~398600.4418 km^3 / s^2
const MU_EARTH = 398600.4418;

const EARTH_RADIUS_KM = 6378.137;

function determineOrbitClass(tleLine1, tleLine2) {
  const orbitClasses = [];
  
  let satrec;
  try {
    satrec = satellite.twoline2satrec(tleLine1.trim(), tleLine2.trim());
  } catch (err) {
    console.warn("Error parsing TLE:", err);
    return ["unknown"];
  }

  if (!satrec) return ["unknown"];

  const ecc = satrec.ecco;                  // Eccentricity
  const incRad = satrec.inclo;             // Inclination in radians
  const incDeg = incRad * (180 / Math.PI); // Convert to degrees
  const meanMotionRadMin = satrec.no;       // Mean motion in rad/min

  // 2) Convert mean motion to rad/s
  const meanMotionRadSec = meanMotionRadMin / 60.0;

  // 3) Orbital period (in minutes)
  const orbitalPeriodMin = (2.0 * Math.PI) / meanMotionRadMin;

  // 4) Semi-major axis (in km)
  if (meanMotionRadSec <= 0) {
    return ["unknown"];
  }
  const a = Math.pow(MU_EARTH / (meanMotionRadSec * meanMotionRadSec), 1 / 3);

  // 5) Perigee & apogee distances from Earth's center
  const perigeeDistKm = a * (1 - ecc); 
  const apogeeDistKm  = a * (1 + ecc);

  // 6) Convert to altitude above Earth’s surface
  const perigeeAltKm = perigeeDistKm - EARTH_RADIUS_KM;
  const apogeeAltKm  = apogeeDistKm - EARTH_RADIUS_KM;

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Classification thresholds
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // LEO threshold: up to ~2,000 km apogee
  // MEO threshold: 2,000 <= alt < ~35,786 km (GEO altitude)
  // GEO altitude: ~35,786 km
  // Geosynchronous period: ~1,436 minutes (sidereal day ~23h56m)
  // Molniya: ~12h period (720 min), high inclination (~63.4), ecc ~0.7
  // SSO: near-polar inc ~97-103°, alt ~600-800 km => period ~98-102 min
  // etc.

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // 7) Add classification tags:
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // 7.1: Check near geosynchronous ( ~24h )
  //     allow ± 15 min tolerance
  if (Math.abs(orbitalPeriodMin - 1436.0) < 15.0) {
    orbitClasses.push("geosynchronous");

    // near-zero inclination & near-zero eccentricity => geostationary
    if (ecc < 0.01 && incDeg < 2.0) {
      orbitClasses.push("geostationary");
    }
  }

  // 7.2: If apogee below ~2,000 km => LEO
  if (apogeeAltKm < 2000) {
    orbitClasses.push("low earth");
  }
  // 7.3: If orbit extends above LEO but below GEO => MEO
  else if (perigeeAltKm > 2000 && apogeeAltKm < 35786) {
    orbitClasses.push("medium earth");

    // Check for semi-synchronous (~12h)
    if (Math.abs(orbitalPeriodMin - 720.0) < 20.0) {
      orbitClasses.push("semi-synchronous");
    }
  }
  // 7.4: If orbit is around or above GEO altitude
//   else if (perigeeAltKm >= 35786) {
//     orbitClasses.push("high earth");
//   }

  // 7.5: Highly Elliptical Orbit check
  //      If eccentricity > 0.25 and apogee over ~2,000 km
  if (ecc > 0.25 && apogeeAltKm > 2000) {
    orbitClasses.push("highly elliptical");

    // Check for Molniya: ~12h period, inc near 63.4, ecc ~0.7
    // if (
    //   Math.abs(orbitalPeriodMin - 720) < 30 &&
    //   incDeg > 62 && incDeg < 64 &&
    //   ecc >= 0.5 && ecc <= 0.8
    // ) {
    //   orbitClasses.push("molniya");
    // }
  }

  // 7.6: Sun-Synchronous check
  //      Typically inc ~97-103°, period ~ 96-105 min, altitude ~600-800 km
  //      We'll keep it simple here:
  if (
    incDeg >= 96 && incDeg <= 103 &&
    orbitalPeriodMin >= 90 && orbitalPeriodMin <= 110
  ) {
    orbitClasses.push("sun-synchronous");
  }

  // 7.7: Polar check
  if (Math.abs(incDeg - 90.0) < 5.0) {
    orbitClasses.push("polar");
  }

  // else default to "other"
  if (orbitClasses.length === 0) {
    orbitClasses.push("other");
  }

  // Return an array of unique labels
  return Array.from(new Set(orbitClasses));
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

// init preprocessing
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

// ------------------- SPACE-TRACK API -------------------

async function loginToSpaceTrack() {
    try {
      const response = await axios.post(
        `${SPACETRACK_API}/ajaxauth/login`,
        `identity=${encodeURIComponent(SPACETRACK_USERNAME)}&password=${encodeURIComponent(SPACETRACK_PASSWORD)}`,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      if (response.status === 200) {
        spaceTrackCookie = response.headers['set-cookie'][0].split(';')[0];
        console.log('Successfully logged in to Space-Track.');
        return true;
      }
    } catch (error) {
      console.error('Space-Track login failed:', error.message);
    }
    return false;
  }
  
  async function fetchSpaceTrackData() {
    if (!spaceTrackCookie && !(await loginToSpaceTrack())) {
      throw new Error('Failed to authenticate with Space-Track.');
    }
  
    try {
      const response = await axios.get(
        `${SPACETRACK_API}/basicspacedata/query/class/gp/decay_date/null-val/epoch/%3Enow-30/orderby/norad_cat_id/format/json`,
        { headers: { Cookie: spaceTrackCookie } }
      );
  
      // 'gp' is each object from the Space-Track JSON array
      return response.data.map((gp) => {
        return {
          catalogNumber: gp.NORAD_CAT_ID.toString(),    // e.g. "5"
          name: gp.OBJECT_NAME,
          country: gp.COUNTRY_CODE || 'Unknown',
          objType: gp.OBJECT_TYPE || 'Unknown',
  
          // --- ADD TIME-RELATED FIELDS ---
          creationDate: gp.CREATION_DATE || null,
          epoch: gp.EPOCH || null,
          launchDate: gp.LAUNCH_DATE || null,
          decayDate: gp.DECAY_DATE || null,
          
          // --- ADD ORBITAL PARAMETERS ---
        //   meanMotion: gp.MEAN_MOTION || null,
        //   period: gp.PERIOD || null,         // in minutes
        //   apoapsis: gp.APOAPSIS || null,     // in km
        //   periapsis: gp.PERIAPSIS || null,   // in km
        //   inclination: gp.INCLINATION || null,
        //   eccentricity: gp.ECCENTRICITY || null,
        //   argOfPericenter: gp.ARG_OF_PERICENTER || null,
        //   meanAnomaly: gp.MEAN_ANOMALY || null,
        //   rcsSize: gp.RCS_SIZE || null,
          
        //   stTleLine0: gp.TLE_LINE0 || null,
        //   stTleLine1: gp.TLE_LINE1 || null,
        //   stTleLine2: gp.TLE_LINE2 || null
        };
      });
    } catch (error) {
      console.error('Error fetching GP data from Space-Track:', error.message);
      throw error;
    }
  }
    
  // ------------------- CELESTRAK API -------------------
  
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
  
          // strip leading zeroes for join:
          const rawCatNum = tleLine1.substring(2, 7).trim(); // e.g. "00005"
          const catNumInt = parseInt(rawCatNum, 10);         // e.g. 5
          const catalogNumber = catNumInt.toString();        // => "5"
  
          const orbitClass = determineOrbitClass(tleLine1, tleLine2);
  
          satellites.push({
            catalogNumber,
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
      console.error(
        `Error fetching data for group "${apiQuery}" from CelesTrak:`,
        error.message
      );
      return [];
    }
  }

  async function fetchActiveCatalogNumbers() {
    const url = `https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle`;
    try {
      const response = await axios.get(url);
      const tleData = response.data.split('\n');
      const activeSet = new Set();
  
      for (let i = 0; i < tleData.length; i += 3) {
        if (tleData[i] && tleData[i + 1] && tleData[i + 2]) {
          // Parse out the catalog number with leading-zero strip
          const tleLine1 = tleData[i + 1].trim();
          const rawCatNum = tleLine1.substring(2, 7).trim(); // e.g. "00005"
          const catNumInt = parseInt(rawCatNum, 10);         // 5
          const catalogNumber = catNumInt.toString();        // "5"
  
          activeSet.add(catalogNumber);
        }
      }
      return activeSet;
    } catch (error) {
      console.error('Error fetching Active group from Celestrak:', error.message);
      return new Set();
    }
  }
  
    
  // ------------------- DATA CONSOLIDATION -------------------
  
  async function consolidateData(spaceTrackData) {
    console.log('Starting data consolidation...');
    const activeSet = await fetchActiveCatalogNumbers();

    const allData = {};
    
    for (const group of groups) {
      const celestrakData = await fetchCelesTrakGroupData(group.api);
      console.log(`Processing ${celestrakData.length} satellites from group: ${group.api}`);
  
      celestrakData.forEach((celestrakItem) => {
        const catalogNumber = celestrakItem.catalogNumber;
        // Now this matches because we stripped leading zeros
        const spaceTrackItem = spaceTrackData.find(
          (item) => item.catalogNumber === catalogNumber
        );
  
        if (!allData[catalogNumber]) {
          allData[catalogNumber] = {
            catalogNumber,
            name: celestrakItem.name,
  
            // Celestrak TLE
            tleLine1: celestrakItem.tleLine1,
            tleLine2: celestrakItem.tleLine2,
            orbitClass: new Set(celestrakItem.orbitClass),
  
            country: spaceTrackItem?.country || 'Unknown',
            launchDate: spaceTrackItem?.launchDate || null,
            epoch: spaceTrackItem?.epoch || null,
            creationDate: spaceTrackItem?.creationDate || null,
            decayDate: spaceTrackItem?.decayDate || null,
            // period: spaceTrackItem?.period || null,
            // apoapsis: spaceTrackItem?.apoapsis || null,
            // periapsis: spaceTrackItem?.periapsis || null,
            // inclination: spaceTrackItem?.inclination || null,
            // rcsSize: spaceTrackItem?.rcsSize || null,
  
            group_major: new Set(),
            group_minor: new Set(),
            constellation: null,

            isActive: activeSet.has(catalogNumber) // boolean

          };
        }
  
        // Merge orbit classes, group, constellation, etc.
        celestrakItem.orbitClass.forEach((oc) => 
          allData[catalogNumber].orbitClass.add(oc)
        );
        allData[catalogNumber].group_major.add(group.group_major);
        if (group.group_major !== "Active") {
          allData[catalogNumber].group_minor.add(group.api);
        }
        if (CONSTELLATIONS.has(group.api)) {
          allData[catalogNumber].constellation = group.api;
        }
      });
    }
  
    // Convert sets to arrays
    const final = Object.values(allData).map((sat) => ({
      ...sat,
      orbitClass: Array.from(sat.orbitClass),
      group_major: Array.from(sat.group_major),
      group_minor: Array.from(sat.group_minor),
    }));
  
    console.log('Consolidation complete.');
    return final;
  }
    
  // ------------------- TIMESTAMP & CACHING -------------------
  
  function shouldFetchNewData() {
    // If no timestamp file, we must fetch
    if (!fs.existsSync(TIMESTAMP_FILE)) return true;
  
    const { lastCached } = JSON.parse(fs.readFileSync(TIMESTAMP_FILE, 'utf-8'));
    if (!lastCached) return true;
  
    const now = Date.now();
    // If current time - lastCached > 25 hours => refetch
    return now - lastCached > CACHE_EXPIRATION_MS;
  }
  
  function writeTimestamp() {
    fs.writeFileSync(
      TIMESTAMP_FILE,
      JSON.stringify({ lastCached: Date.now() }, null, 2)
    );
    console.log('Timestamp updated.');
  }
  
  const USE_PYTHON_PROCESSING = false;  // false to skip python pipeline

  async function buildAndWriteConsolidatedData() {
    const rawSpaceTrackData = await fetchSpaceTrackData();
    let finalSpaceTrackData;
  
    if (USE_PYTHON_PROCESSING) {
      finalSpaceTrackData = await preprocessSpaceTrackData(rawSpaceTrackData);
    } else {
      finalSpaceTrackData = rawSpaceTrackData; // no preprocessing
    }
  
    const consolidatedData = await consolidateData(finalSpaceTrackData);
  
    fs.writeFileSync(
      CONSOLIDATED_CACHE_FILE,
      JSON.stringify(consolidatedData, null, 2)
    );
    writeTimestamp();
  }
    
  // ------------------- MAIN LOGIC (CRON or SERVER) -------------------
  
  
  app.get('/refresh', async (req, res) => {
    try {
      if (shouldFetchNewData()) {
        console.log('Cache expired. Building new data...');
        await buildAndWriteConsolidatedData();
        return res.json({ status: 'Data refreshed' });
      } else {
        console.log('Cache still valid, skip refreshing.');
        return res.json({ status: 'Cache is still valid' });
      }
    } catch (err) {
      console.error('Error refreshing data:', err);
      return res.status(500).json({ error: err.message });
    }
  });
  
  app.get('/satellites', (req, res) => {
    // Serve the JSON file from local cache. If not found, force refresh.
    if (!fs.existsSync(CONSOLIDATED_CACHE_FILE)) {
      return res.status(404).json({ error: 'No cached data found.' });
    }
    const data = JSON.parse(fs.readFileSync(CONSOLIDATED_CACHE_FILE, 'utf-8'));
    res.json({ data });
  });
  
  // local dev
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  
    if (shouldFetchNewData()) {
      console.log('Initial cache is stale or missing, refreshing now...');
      await buildAndWriteConsolidatedData();
    } else {
      console.log('Initial cache is valid, no refresh needed.');
    }
  });
  