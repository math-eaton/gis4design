// satQueryServer.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: 'https://math-eaton.github.io' }));

// Configurations
const port = process.env.PORT || 3000;
const TLE_URL = 'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle';
const cacheFilePath = path.join(__dirname, 'cachedSatellites.json');
const timeFilePath = path.join(__dirname, 'lastCacheTime.json');

// Function to fetch TLE data from Celestrak
async function fetchTLEData() {
    const response = await axios.get(TLE_URL);
    const data = response.data;
    return parseTLEData(data);
}

// Function to parse TLE data
function parseTLEData(text) {
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    const tleArray = [];

    for (let i = 0; i < lines.length; i += 3) {
        const name = lines[i];
        const tleLine1 = lines[i + 1];
        const tleLine2 = lines[i + 2];
        tleArray.push({ name, tleLine1, tleLine2 });
    }

    return tleArray;
}

// Function to check if eight hours have passed since the last cache
function isCacheExpired() {
    if (!fs.existsSync(timeFilePath)) return true; // No time file, so cache is expired

    const lastCacheTime = JSON.parse(fs.readFileSync(timeFilePath, 'utf-8')).timestamp;
    const currentTime = Date.now();
    const eightHoursInMillis = 8 * 60 * 60 * 1000;

    return (currentTime - lastCacheTime) > eightHoursInMillis;
}

// Endpoint to get cached satellites or fetch new data
app.get('/satellites', async (req, res) => {
    try {
        // Check if cache is expired
        if (isCacheExpired()) {
            console.log('Cache expired or missing. Fetching new data...');
            const tleArray = await fetchTLEData();

            // Save new data to cache
            fs.writeFileSync(cacheFilePath, JSON.stringify(tleArray, null, 2));
            // Update last cache time
            fs.writeFileSync(timeFilePath, JSON.stringify({ timestamp: Date.now() }, null, 2));
        } else {
            console.log('Using cached data.');
        }

        // Read from the cache
        const cachedData = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));

        // Get the last cache time
        const lastCacheTime = JSON.parse(fs.readFileSync(timeFilePath, 'utf-8')).timestamp;

        // Respond with TLE data and timestamp
        res.json({ timestamp: lastCacheTime, satellites: cachedData });
    } catch (error) {
        console.error('Error fetching or caching TLE data:', error);
        res.status(500).send('Error fetching or caching TLE data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/satellites`);
});
