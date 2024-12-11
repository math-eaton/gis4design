import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import * as satellite from 'satellite.js';
import Stats from 'stats.js'
import { createNoise2D } from 'simplex-noise';
// import { Earcut } from 'three/src/extras/Earcut.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';


//

// 'W' key toggles wireframe
// 'R' key toggles rotation

export function orbitalView(containerId, onTLELoadComplete) {
    let scene, camera, renderer, controls, pivot, moonPivot, sunMesh;
    let animationFrameId;
    let tleArray = [];
    let sunLine;

    let orbitControls, mapControls, firstPersonControls, trackballControls, flyControls;


    let currentChapter = 'smallScale'; // Default chapter
    let lastLat, lastLon;

    let scaleBar;
    // const scaleBarElements = createScaleBar();


    // toggle defaults
    let isRotationEnabled = true;
    let wireframe = false;
    let trailsEnabled = false;


    // const raycaster = new THREE.Raycaster();
    // const cameraDirection = new THREE.Vector3();


    // responsive stuff
    const baseZ = 66; // default z-position value for desktop

    const mobileScaleFactor = 2; // responsive camera
    
    let directionalLight;
    let sphere; // Global reference to the sphere

    const earthRadiusKm = 6371; // Earth's radius in kilometers
    const sphereRadius = 1; // Earth’s radius as 1 unit in Three.js
    const scaleFactor = sphereRadius / earthRadiusKm; // Base scaling factor for consistency
    // const scaleBarLengthKm = sphereRadius * earthRadiusKm;

    
    const earthRotationSpeed = (2 * Math.PI) / 86400; // Earth rotation speed in radians per second
    const earthTilt = 23.44 * (Math.PI / 180); // Convert 23.4 degrees to radians
    // const earthTilt = 0; // troubleshooting

    const moonOrbitalPeriodInSeconds = 27.32 * 24 * 3600; // 27.32 days in seconds
    const moonAngularSpeed = (2 * Math.PI) / moonOrbitalPeriodInSeconds; // Moon orbit speed in radians per second
    

    // const planets = [];
    let distanceCompressionFactor = 1; // Initial v exaggeration factor

    let moonMesh;

    // stats
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
    stats.dom.id = 'statistics';

    window.addEventListener('keydown', (event) => {
        if (event.key === 'R' || event.key === 'r') {
            isRotationEnabled = !isRotationEnabled;
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'W' || event.key === 'w') {
            wireframe = !wireframe;
            pivot.traverse(function (child) {
                if (child.isMesh) {
                    child.material.wireframe = wireframe;
                    child.material.needsUpdate = true;
                }
            });
        }
    });

    function initControls() {
        // Initialize OrbitControls small scale
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.enablePan = false;
        orbitControls.dampingFactor = 0.25;
        // orbitControls.zoomSpeed = 0.5;
        orbitControls.rotateSpeed = 0.25;
        orbitControls.minDistance = 5;
        orbitControls.maxDistance = 100;

        // Trackball option large scale
        trackballControls = new TrackballControls(camera, renderer.domElement);
        trackballControls.rotateSpeed = 1.25;
        trackballControls.panSpeed = 0.2;
        trackballControls.noZoom = false;
        trackballControls.noPan = false;
        // trackballControls.noRotate = true;
        trackballControls.staticMoving = false;
        trackballControls.dynamicDampingFactor = 0.33;    
        

        
    
        // Initialize MapControls 
        mapControls = new MapControls(camera, renderer.domElement);
        // mapControls.enableDamping = true;
        // mapControls.dampingFactor = 0.3;
        // mapControls.zoomSpeed = 0.5;
        // mapControls.enableRotate = true;
        // mapControls.minDistance = 1;
        // mapControls.maxDistance = 50;

    
        // Initialize FirstPersonControls (for fixed)
        firstPersonControls = new FirstPersonControls(camera, renderer.domElement);
        firstPersonControls.lookSpeed = 0.1;
        firstPersonControls.movementSpeed = 5;
        firstPersonControls.noFly = true;
        firstPersonControls.lookVertical = true;

        // flycontrol option
        flyControls = new FlyControls(camera, renderer.domElement);
        // flyControls.movementSpeed = 100; // Adjust for smooth movement
        // flyControls.rollSpeed = Math.PI / 24;
        // flyControls.autoForward = false;
        // flyControls.dragToLook = true;
        
        // Start with OrbitControls enabled
        enableControls(orbitControls);
    }
    
    function enableControls(activeControls) {
        // Disable all controls by default
        orbitControls.enabled = false;
        mapControls.enabled = false;
        firstPersonControls.enabled = false;
        flyControls.enabled = false;
        trackballControls.enabled = false; 
    
        // actively enable the specified controls
        if (activeControls) {
            activeControls.enabled = true;
        }
    }
            

    async function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 300000);
    
        camera.position.set(0, 0, 800);
        camera.position.z = 66;
    
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xC0C0C0, 0);
    
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
        document.getElementById(containerId).appendChild(renderer.domElement);

        initControls();

        // Responsive z-position initialization
        setResponsiveCameraPosition();

    
        // controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.enableZoom = true;
        // controls.enablePan = false;
        // controls.dampingFactor = 0.25;
    
        // controls.zoomSpeed = 0.666;
        // controls.rotateSpeed = 0.25;
    
        // controls.minDistance = 10;
        // controls.maxDistance = 100;
    
        // Wait for simulation time to be initialized
        await initializeSimulationTime();
    
        addSun();
        updateSunDistance();
        updateSunPosition(simulationTime, scaleFactor); // Update Sun position
    
        pivot = new THREE.Group();
        pivot.rotation.z = earthTilt; // Tilt the entire Earth system by 23.4 degrees on the Z-axis
        scene.add(pivot);
    
        moonPivot = new THREE.Group();
        scene.add(moonPivot);
    
        addEarthSphere();
        // updateSunLine(); // Sync Sun line position
    
        addMoon();
        setupChapterControls();
        loadTLEData();
        loadAllData();
        initializeSlider();
    
        window.addEventListener("resize", onWindowResize, false);
        onWindowResize();
    
        animate();
    }
    
    function addSun() {
        // Ambient and directional lights (your existing code)
        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
    
        directionalLight = new THREE.DirectionalLight(0x5b5b5b, 100);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

    
        const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
        scene.add(hemiLight);
    
        // Sun object setup (your existing code)
        const sunRadius = sphereRadius * 109 * distanceCompressionFactor;
        const sunGeometry = new THREE.SphereGeometry(sunRadius, 24, 24);
        const sunMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
            emissive: 0xffa500,
            opacity: 0.25,
            transparent: true,
            wireframe: true,
            alphaHash: true,
        });

    
        sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sunMesh);
    
        // Sun pivot group to hold position
        const sunPivot = new THREE.Group();
        scene.add(sunPivot);
        sunPivot.add(sunMesh);
        sunPivot.add(directionalLight);

    }

        // Calculate Julian Date
    function getJulianDate(date) {
        return date.getTime() / 86400000 + 2440587.5; // Convert milliseconds to days
    }

    // Update the Sun's position based on simulation time
    function updateSunPosition(simulationTime, scaleFactor) {
        const julianDate = getJulianDate(simulationTime);
        const T = (julianDate - 2451545.0) / 36525; // Centuries since J2000

        // Sun's orbital parameters
        const L0 = 280.46646 + T * (36000.76983 + T * 0.0003032); // Mean longitude (degrees)
        const M = 357.52911 + T * (35999.05029 - 0.0001537 * T); // Mean anomaly (degrees)
        const C = (1.914602 - T * (0.004817 + 0.000014 * T)) * Math.sin(M * (Math.PI / 180))
                + (0.019993 - 0.000101 * T) * Math.sin(2 * M * (Math.PI / 180))
                + 0.000289 * Math.sin(3 * M * (Math.PI / 180)); // Sun's equation of center
        const trueLongitude = L0 + C; // True longitude of the Sun (degrees)

        // Sun's position in Earth-centered coordinates
        const eclipticObliquity = 23.44 * (Math.PI / 180); // Axial tilt in radians
        const sunEclipticX = Math.cos(trueLongitude * (Math.PI / 180));
        const sunEclipticY = Math.cos(eclipticObliquity) * Math.sin(trueLongitude * (Math.PI / 180));
        const sunEclipticZ = Math.sin(eclipticObliquity) * Math.sin(trueLongitude * (Math.PI / 180));

        // Scale Sun to a realistic distance
        const sunDistanceAU = 1; // 1 Astronomical Unit
        const sunPosition = new THREE.Vector3(
            sunEclipticX * sunDistanceAU,
            sunEclipticZ * sunDistanceAU, 
            -sunEclipticY * sunDistanceAU 
        ).multiplyScalar(scaleFactor * 149.6e6);
        
        // Update Sun's position and light in the scene
        sunMesh.position.copy(sunPosition);
        directionalLight.position.copy(sunPosition);
        directionalLight.target.position.set(0, 0, 0); // Point light at Earth's center
        directionalLight.target.updateMatrixWorld();
    }

    
        // Function to update sun's distance based on current compression factor
        function updateSunDistance() {
            const sunDistanceFromEarth = 149.6e6 * scaleFactor * distanceCompressionFactor;
            sunMesh.position.set(sunDistanceFromEarth, 0, 0);
            directionalLight.position.copy(sunMesh.position);
        }
    
        // debugging
        function updateSunLine() {
            const positions = sunLine.geometry.attributes.position.array;
            positions[0] = 0; // Earth's center
            positions[1] = 0;
            positions[2] = 0;
        
            positions[3] = sunMesh.position.x;
            positions[4] = sunMesh.position.y;
            positions[5] = sunMesh.position.z;
        
            sunLine.geometry.attributes.position.needsUpdate = true;
        }
        
    
        // Initialize Simplex Noise for subtle rotation
        const simplex = new createNoise2D();
        let time = 0;
        const noiseSpeed = 0.00001;
        const noiseAmplitude = 0.002;
    
        function animateSunRotation() {
            time += noiseSpeed;
            const noiseX = simplex(time, 0) * noiseAmplitude;
            const noiseY = simplex(0, time) * noiseAmplitude;
            const noiseZ = simplex(time, time) * noiseAmplitude;
    
            sunMesh.rotation.x += noiseX;
            sunMesh.rotation.y += noiseY;
            sunMesh.rotation.z += noiseZ;
        }     
    
            
    function addMoon() {
        const moonRadius = sphereRadius * 0.273; // Moon radius is about 27.3% of Earth's radius
        const moonMaterial = new THREE.MeshStandardMaterial({
            color: 0x8a8a8a, 
            roughness: 1,
            metalness: 1.25,
            // opacity: 0.8,
            // transparent: true,
            // alphaHash: true,
            // depthTest: false,
        });
    
        const moonGeometry = new THREE.SphereGeometry(moonRadius, 32, 32);
        moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        moonPivot.add(moonMesh); // Add moon mesh to the pivot so it orbits with Earth
    }
    
    function updateMoonPosition() {
        if (!moonMesh) return;
    
        const moonAverageAltitudeKm = 384400; // Average distance to Moon in kilometers
        const moonDistanceFromEarth = moonAverageAltitudeKm * scaleFactor * distanceCompressionFactor;
    
        // Calculate Moon’s orbit position based on the proportional time relationship
        const elapsedSeconds = simulationTime.getTime() / 1000; // Convert simulation time to seconds
        const moonAngle = (elapsedSeconds * moonAngularSpeed) % (2 * Math.PI); // Moon's orbital angle
        const eccentricity = 0.0549; // Moon's orbital eccentricity
    
        const x = moonDistanceFromEarth * (Math.cos(moonAngle) - eccentricity);
        const z = moonDistanceFromEarth * Math.sin(moonAngle) * Math.sqrt(1 - eccentricity ** 2);
    
        let moonPosition = new THREE.Vector3(x, 0, z);
    
        // Rotate the Moon's orbit by its inclination (5.145 degrees) around Earth's x-axis
        const inclination = 5.145 * (Math.PI / 180); // Convert to radians
        moonPosition.applyAxisAngle(new THREE.Vector3(1, 0, 0), inclination);
    
        // Apply Earth's tilt to the Moon's orbit
        moonPosition.applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt);
    
        // Set the calculated position
        moonMesh.position.copy(moonPosition);
    }
        

// Load TLE data from cached JSON file
// with loading screen
// todo: separate loading screen to main.js config

let satelliteMesh;
let geostationaryInstancedMesh;

function loadTLEData() {
    const types = ['PAYLOAD', 'ROCKET BODY', 'DEBRIS'];
    const fetchPromises = types.map(type =>
        fetch(`https://orbital-bbfd.onrender.com/satellites/${type}`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${type} TLE data`);
                return response.json();
            })
            .then(data => ({ type, data }))
    );

    Promise.all(fetchPromises)
        .then(results => {
            const allSatellites = results.reduce((acc, result) => {
                acc[result.type] = result.data.satellites;
                return acc;
            }, {});
            processTLEData(allSatellites); // Pass all satellite data to your visualization loop
        })
        .catch(error => {
            console.warn('Error fetching TLE data from server:', error);
            console.log('Attempting to load data from local static file...');
            fetch('orbital/cachedSatellites_celestrak.json')
                .then(localResponse => {
                    if (!localResponse.ok) throw new Error('Local file fetch failed');
                    return localResponse.json();
                })
                .then(localData => processTLEData(localData))
                .catch(localError => {
                    console.error('Failed to load TLE data from both server and local file:', localError);
                    onTLELoadComplete(); // Still trigger the callback if loading fails
                });
        });
}

function processTLEData(tleData) {
    // Check if the data is an array or has a `satellites` key
    tleArray = Array.isArray(tleData) ? tleData : tleData.satellites;

    if (!Array.isArray(tleArray)) {
        throw new Error('Invalid TLE data format: Expected an array');
    }

    // Add metadata for classification
    tleArray.forEach((sat) => {
        sat.metadata = {
            orbitClass: determineOrbitClass(sat),
            ownerCountry: sat.country || 'Unknown', // Example: Add owner metadata
            satelliteType: sat.objectType || 'Unknown', // Example: Add type metadata
        };
    });

    console.log("TLE Data with Metadata:", tleArray);

    // Pass the entire array for mesh creation
    createSatelliteMeshes(tleArray);

    onTLELoadComplete(); // Callback when TLE data is successfully loaded
}

// Helper function to classify orbit type
function determineOrbitClass(sat) {
    try {
        const satrec = satellite.twoline2satrec(
            sat.tleLine1.trim(),
            sat.tleLine2.trim()
        );
        const inclination = satrec.inclo * (180 / Math.PI); // Convert inclination to degrees
        const period = (2 * Math.PI) / satrec.no; // Orbital period in minutes

        if (Math.abs(inclination) < 0.1 && Math.abs(period - 1436) < 1) return 'geostationary';
        if (Math.abs(period - 1436) < 10) return 'geosynchronous';
        if (Math.abs(inclination - 98) < 2 && Math.abs(period - 100) < 5) return 'sunSynchronous';
        return 'nonGeostationary';
    } catch (err) {
        console.error('Failed to determine orbit class for satellite:', sat.name, err);
        return 'unknown';
    }
}

const classificationSchemes = {
    orbitClass: {
        getClass: (sat) => sat.orbitClass, 
        colors: { 
            geostationary: 0xffffff, 
            sunSynchronous: 0xffff00, 
            nonGeostationary: 0xff0000,
            unknown: 0xff00ff
        },
    },
    ownerCountry: {
        getClass: (sat) => sat.ownerCountry, // Example: "USA", "China", "Others"
        colors: { 
            US: 0x0000ff, 
            PRC: 0xff0000, 
            Unknown: 0x00ff00 
        },
    },
    satelliteType: {
        getClass: (sat) => sat.satelliteType, // Example: "GPS", "Weather", "Debris"
        colors: { 
            ROCKETBODY: 0x00ff00, 
            Weather: 0x0088ff, 
            DEBRIS: 0xff8800 },
    },
};

// Helper to determine color based on scheme
function getColorByScheme(scheme, sat) {
    const { getClass, colors } = classificationSchemes[scheme];
    const category = getClass(sat);
    return colors[category] || 0xff0000; // Default to white if no color is defined
}

function applyClassification(instancedMesh, scheme, tleArray) {
    if (!instancedMesh || !instancedMesh.count) {
        console.error("InstancedMesh is not properly initialized.");
        return;
    }

    const dummy = new THREE.Object3D();
    const colors = new Float32Array(instancedMesh.count * 3); // RGB for each instance

    tleArray.forEach((sat, i) => {
        if (i >= instancedMesh.count) {
            console.warn(`Instance index ${i} exceeds InstancedMesh count (${instancedMesh.count}).`);
            return;
        }

        const colorHex = getColorByScheme(scheme, sat.metadata);
        const color = new THREE.Color(colorHex);

        try {
            instancedMesh.getMatrixAt(i, dummy.matrix); // Safely get the matrix
        } catch (err) {
            console.error(`Error accessing matrix for instance ${i}:`, err);
            return;
        }

        dummy.updateMatrix();

        instancedMesh.setMatrixAt(i, dummy.matrix); // Retain position
        colors.set(color.toArray(), i * 3); // Set color
    });

    instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    instancedMesh.instanceMatrix.needsUpdate = true;
}


let activeScheme = 'orbitClass'; // Default scheme

document.getElementById('orbit-class').addEventListener('click', () => {
    switchClassification('orbitClass');
});

document.getElementById('owner-country').addEventListener('click', () => {
    switchClassification('ownerCountry');
});

document.getElementById('satellite-type').addEventListener('click', () => {
    switchClassification('satelliteType');
});



function switchClassification(newScheme) {
    activeScheme = newScheme;
    applyClassification(satelliteMesh, activeScheme, tleArray);
    // updateLegend();
}

function updateLegend() {
    const legendContainer = document.getElementById('category-toggles');
    legendContainer.innerHTML = '';

    const { colors } = classificationSchemes[activeScheme];
    for (const [category, colorHex] of Object.entries(colors)) {
        const button = document.createElement('button');
        button.style.background = `#${colorHex.toString(16)}`;
        button.style.color = 'white';
        button.textContent = category;
        button.onclick = () => toggleCategoryVisibility(category);
        legendContainer.appendChild(button);
    }
}

function toggleCategoryVisibility(category) {
    // Implement logic to toggle visibility of specific categories
    console.log(`Toggling visibility for ${category}`);
}



// satellite material
function createSatelliteMeshes(tleArray) {
    const material = new THREE.MeshBasicMaterial({
        metalness: 1,
        roughness: 0.2,
        transparent: false,
        wireframe: true,
        // opacity: 0.8,
    });

    // Create a single instanced mesh for all satellites
    satelliteMesh = createSatelliteInstancedMesh(tleArray, material, currentChapter === 'smallScale');

    // Add the consolidated mesh to the scene
    scene.add(satelliteMesh);

    console.log("Consolidated satellite mesh created and added to the scene.");
}

// Propagate position helper
function propagateSatellitePosition(satrec) {
    const gmst = satellite.gstime(simulationTime); // Greenwich Mean Sidereal Time
    const positionAndVelocity = satellite.propagate(satrec, simulationTime);

    if (positionAndVelocity.position) {
        const positionEci = positionAndVelocity.position;
        const positionEcef = satellite.eciToEcf(positionEci, gmst);

        const altitude = positionEcef.height * scaleFactor * distanceCompressionFactor;
        const latitude = satellite.degreesLat(positionEcef.latitude);
        const longitude = satellite.degreesLong(positionEcef.longitude);

        // Convert to Earth-fixed coordinates with pivot rotation applied
        const position = latLonToVector3(latitude, longitude, sphereRadius + altitude);
        position.applyMatrix4(pivot.matrixWorld); // Apply Earth's rotation (pivot)

        return position;
    }

    return null;
}


// custom frustrum culling for satellite lines
const frustum = new THREE.Frustum();
const cameraViewProjectionMatrix = new THREE.Matrix4();

function isSatelliteVisible(position) {
    camera.updateMatrixWorld(); // Ensure the camera matrix is up-to-date

    // Create an expanded frustum matrix
    const bufferFactor = .9; // Add a -N% buffer
    const projectionMatrixWithBuffer = camera.projectionMatrix.clone();
    projectionMatrixWithBuffer.elements[0] *= bufferFactor; // Left/Right
    projectionMatrixWithBuffer.elements[5] *= bufferFactor; // Top/Bottom

    cameraViewProjectionMatrix.multiplyMatrices(projectionMatrixWithBuffer, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

    // Check if the satellite is within the expanded frustum
    if (!frustum.containsPoint(position)) {
        return false;
    }

    // Check if the satellite is occluded by the Earth sphere
    const earthCenter = new THREE.Vector3(0, 0, 0);
    const directionToSatellite = position.clone().sub(earthCenter).normalize();
    const directionToCamera = camera.position.clone().sub(earthCenter).normalize();

    // If the angle between the satellite's direction and the camera's direction is >90 degrees, it's occluded
    const dotProduct = directionToSatellite.dot(directionToCamera);
    if (dotProduct < 0) {
        return false; // Satellite is occluded
    }

    return true;
}

// create satellite instances (scale dependent appearance)
function createSatelliteInstancedMesh(tleArray, material, isFixedView = false) {
    if (!tleArray || !Array.isArray(tleArray) || tleArray.length === 0) {
        throw new Error("Invalid TLE array passed to createSatelliteInstancedMesh.");
    }

    const instanceCount = tleArray.length;

    // Geometry scaling based on view type
    const satelliteGeometry = isFixedView
        ? new THREE.SphereGeometry(0.002, 8, 8) // Smaller, higher resolution for fixed view
        : new THREE.SphereGeometry(0.004, 2, 3); // Larger, lower resolution for smallScale view

    const instancedMesh = new THREE.InstancedMesh(satelliteGeometry, material, instanceCount);
    const colors = new Float32Array(instanceCount * 3); // Color buffer for classification
    const dummy = new THREE.Object3D();
    const gmst = satellite.gstime(simulationTime);

    tleArray.forEach((sat, i) => {
        try {
            const satrec = satellite.twoline2satrec(sat.tleLine1.trim(), sat.tleLine2.trim());
            instancedMesh.userData[i] = { satrec, metadata: sat.metadata }; // Store metadata for classification

            // Propagate TLE to get the initial position
            const position = propagateSatellitePosition(satrec, gmst, false);
            if (position) {
                dummy.position.copy(position);
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(i, dummy.matrix);
            } else {
                // Log and assign a default position if propagation fails
                console.warn(`Failed to propagate position for satellite: ${sat.name}`);
                dummy.position.set(0, 0, 0);
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(i, dummy.matrix);
            }

            // Assign initial color based on classification scheme
            const color = new THREE.Color(getColorByScheme(activeScheme, sat.metadata));
            colors.set(color.toArray(), i * 3);
        } catch (error) {
            console.error(`Error initializing satellite ${sat.name}:`, error);
        }
    });

    instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    instancedMesh.instanceMatrix.needsUpdate = true;
    instancedMesh.instanceColor.needsUpdate = true;

    return instancedMesh;
}
// Helper function to propagate satellite position
function propagateSatellitePosition(satrec, gmst, isGeostationary) {
    const positionAndVelocity = satellite.propagate(satrec, simulationTime);
    if (!positionAndVelocity.position) return null;

    const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
    const altitude = positionGd.height * scaleFactor * distanceCompressionFactor;
    const latitude = satellite.degreesLat(positionGd.latitude);
    const longitude = satellite.degreesLong(positionGd.longitude);

    let position = latLonToVector3(latitude, longitude, sphereRadius + altitude);

    // Apply Earth's rotation for geostationary satellites
    if (isGeostationary) {
        const rotationAngle = (simulationTime.getTime() / 1000) % 86400 * earthRotationSpeed;
        position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationAngle);
    }

    return position;
}


const satelliteLines = new Map(); // Map satellite index to its line

function updateSatellitePositions(instancedMesh) {
    if (!instancedMesh || !instancedMesh.instanceColor) {
        console.error("InstancedMesh or its color buffer is not initialized.");
        return;
    }

    const gmst = satellite.gstime(simulationTime); // Greenwich Mean Sidereal Time
    const dummy = new THREE.Object3D();
    const colors = instancedMesh.instanceColor.array;
    const earthCenter = new THREE.Vector3(0, 0, 0);


    for (let i = 0; i < instancedMesh.count; i++) {
        const { satrec, metadata } = instancedMesh.userData[i];

        // Propagate satellite position
        const position = propagateSatellitePosition(satrec, gmst);
        if (!position) continue;

        // Apply Earth's axial tilt compensation
        position.applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt);

        // Apply rotation for geostationary satellites
        // if (metadata.orbitClass === 'geostationary' || metadata.orbitClass === 'sunSynchronous') {
        if (instancedMesh) {
            const elapsedSeconds = (simulationTime.getTime() / 1000) % 86400; // Seconds in a day
            const rotationAngle = (elapsedSeconds * earthRotationSpeed) % (2 * Math.PI);
            const tiltedYAxis = new THREE.Vector3(0, 1, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt);
            position.applyAxisAngle(tiltedYAxis, rotationAngle); // Rotate around Earth's tilted Y-axis
        }

        // Update satellite position in the instanced mesh
        dummy.position.copy(position);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);

        // Update satellite color based on active classification scheme
        const color = new THREE.Color(getColorByScheme(activeScheme, metadata));
        colors.set(color.toArray(), i * 3);

        // Update lines in fixed view
        if (currentChapter !== 'smallScale') {
            updateSatelliteLine(i, position, earthCenter);
        }
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    instancedMesh.instanceColor.needsUpdate = true; // Ensure colors are updated
}


function updateSatelliteLine(index, satellitePosition, earthCenter) {
    const isVisible = isSatelliteVisible(satellitePosition);

    if (!isVisible) {
        // Remove line if it's no longer visible
        if (satelliteLines.has(index)) {
            const line = satelliteLines.get(index);
            scene.remove(line);
            line.geometry.dispose();
            line.material.dispose();
            satelliteLines.delete(index);
        }
        return;
    }

    // Create or update the line
    if (!satelliteLines.has(index)) {
        // Retrieve the satellite's color from instanceColor
        const colorArray = satelliteMesh.instanceColor.array;
        const satelliteColor = new THREE.Color(
            colorArray[index * 3],
            colorArray[index * 3 + 1],
            colorArray[index * 3 + 2]
        );

        // Create the line if it doesn't exist
        const lineGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6); // Two points (start and end)
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const lineMaterial = new THREE.LineBasicMaterial({
            color: satelliteColor, // Assign satellite's color to the line
            transparent: false, 
            alphaHash: true,
            // opacity: 0.9, 
        });

        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
        satelliteLines.set(index, line);
    }

    // Update line geometry
    const line = satelliteLines.get(index);
    const positions = line.geometry.attributes.position.array;
    positions[0] = earthCenter.x;
    positions[1] = earthCenter.y;
    positions[2] = earthCenter.z;
    positions[3] = satellitePosition.x;
    positions[4] = satellitePosition.y;
    positions[5] = satellitePosition.z;
    line.geometry.attributes.position.needsUpdate = true;
}
            


function setResponsiveCameraPosition() {
    const isMobile = window.innerWidth <= 768;

    // Adjust camera and active control properties dynamically
    if (orbitControls.enabled) {
        orbitControls.minDistance = isMobile ? 50 : 5;
        orbitControls.maxDistance = isMobile ? 500 : 100;
    } else if (mapControls.enabled) {
        mapControls.minDistance = isMobile ? 20 : 10;
        mapControls.maxDistance = isMobile ? 100 : 50;
    } else if (mapControls.enabled) {
        trackballControls.minDistance = isMobile ? 20 : 5;
        trackballControls.maxDistance = isMobile ? 100 : 50;
    } else if (firstPersonControls.enabled) {
        // FirstPersonControls don't have min/max distance but can have adjusted speed
        firstPersonControls.movementSpeed = isMobile ? 2 : 5;
    }

    // Adjust camera position
    camera.position.z = isMobile ? baseZ * mobileScaleFactor : baseZ;
}


    
    let simulationTime; // Starting time for the simulation
    const timeDelta = 1000 / 24; // 1-second increment per frame @ N fps divisor
    let timeMultiplier = 1000; // Overall simulation speed multiplier

    // Function to fetch and set initial simulation time
    function initializeSimulationTime() {
        return fetch('https://orbital-bbfd.onrender.com/satellites') // Use the metadata endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch last cache time");
                }
                return response.json();
            })
            .then(data => {
                if (!data.timestamp) {
                    throw new Error("Timestamp not found in response");
                }
                simulationTime = new Date(data.timestamp);
                document.getElementById("simulation-time").textContent = simulationTime
                    .toUTCString()
                    .replace("GMT", "UTC");
            })
            .catch(error => {
                console.error("Error loading cache time:", error);
                simulationTime = new Date('2024-11-01T00:00:00Z'); // Fallback
            });
    }
            
    function updateSimulationTime() {
        simulationTime = new Date(simulationTime.getTime() + timeDelta * timeMultiplier);
        const displayTime = simulationTime.toUTCString().replace("GMT", "UTC");
        document.getElementById("simulation-time").textContent = displayTime;
    
        // Update Sun's position with new simulation time
        updateSunPosition(simulationTime, scaleFactor);
    }
    

// Adjust Earth rotation based on centralized simulation time
function updateEarthRotation() {
    if (isRotationEnabled) {
        const elapsedSeconds = (simulationTime.getTime() / 1000) % 86400; // Earth day in seconds
        const rotationAngle = (elapsedSeconds * earthRotationSpeed) % (2 * Math.PI);

        // Apply tilt and rotation in the correct order
        pivot.rotation.set(0, 0, 0); // Reset previous rotations
        pivot.rotateZ(earthTilt); // Apply axial tilt first
        pivot.rotateY(rotationAngle); // Apply Earth's rotation
    }
}

// function updateTrailGeometry(trail) {
//     if (!trail.positions.length) return;

//     if (!trail.lineMesh) {
//         const geometry = new THREE.BufferGeometry();
//         const material = new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: true, alphaHash: true, premultipliedAlpha: true,
//         });
//         trail.lineMesh = new THREE.Line(geometry, material);
//         scene.add(trail.lineMesh);
//         }

//     const positionsArray = new Float32Array(trail.positions.length * 3);
//     trail.positions.forEach((pos, i) => {
//         positionsArray[i * 3] = pos.x;
//         positionsArray[i * 3 + 1] = pos.y;
//         positionsArray[i * 3 + 2] = pos.z;
//     });

//     trail.lineMesh.geometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
//     trail.lineMesh.geometry.setDrawRange(0, trail.positions.length);
//     trail.lineMesh.geometry.attributes.position.needsUpdate = true;
// }




    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Update camera position for responsiveness
        setResponsiveCameraPosition();
    }


// lock framerate
  let clock = new THREE.Clock();
  let delta = 0;
  // N fps
  const framerate = 24;
  let interval = 1 / framerate;




  function animate() {
    delta += clock.getDelta();

    if (delta > interval) {
        stats.begin();
        animationFrameId = requestAnimationFrame(animate);

        updateSimulationTime();
        updateEarthRotation();

        // Check camera distance for LOD
        checkCameraDistance();

        // Update positions and colors for all satellites
        if (satelliteMesh) {
            updateSatellitePositions(satelliteMesh);
        }

        updateMoonPosition();
        animateSunRotation();
        updateSunDistance();

        // Sync Sun's position dynamically
        updateSunPosition(simulationTime, scaleFactor);


        if (currentChapter === 'fixed') {
            const { lat, lon } = chapterConfig.fixed.coordinates[selectedCity];
            if (lat !== lastLat || lon !== lastLon) {
                switchToFixedView(lat, lon);
                lastLat = lat;
                lastLon = lon;
            }
        }


        if (orbitControls.enabled) orbitControls.update();
        // if (mapControls.enabled) mapControls.update();
        if (firstPersonControls.enabled) firstPersonControls.update(clock.getDelta()); // Requires delta time
        if (trackballControls.enabled) trackballControls.update(); // Explicit update for TrackballControls
        // if (flyControls.enabled) flyControls.update(delta); // Pass delta to FlyControls

        renderer.render(scene, camera);
        stats.end();

        delta = delta % interval;
    }
    requestAnimationFrame(animate);
}

// function resetCameraForFlyControls() {
//     camera.position.set(0, 0, sphereRadius * 2); // Position the camera at a reasonable distance
//     camera.lookAt(new THREE.Vector3(0, 0, 0)); // Point the camera at the Earth's center
//     camera.updateProjectionMatrix(); // Apply changes to the camera
// }



    // Convert geographic coordinates (lat, lon) to 3D cartesian coordinates
    function latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to polar angle in radians
        const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to azimuthal angle in radians
    
        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);
    
        return new THREE.Vector3(x, y, z);
    }
    
    let selectedCity = 'newYork'; // Default city

    // config params for each bookmark/chapter
    const modeManager = {
        smallScale: {
            activate: () => {

            // Enable OrbitControls
            enableControls(orbitControls);
            // orbitControls.zoomSpeed = 0.5;
            orbitControls.enablePan = false;

            // Adjust camera position for a top-down or equatorial view
            camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure camera looks at Earth's center
            camera.updateProjectionMatrix();
            
            // Reset OrbitControls target to the globe's center
            orbitControls.target.set(0, 0, 0);
            orbitControls.update();

            // Apply chapter-specific configurations
            applyChapterConfig('smallScale');
            },
        },
        largeScale: {
            activate: () => {
                enableControls(orbitControls); // Activate OrbitControls
                orbitControls.enablePan = true;
                orbitControls.target.set( 0, 1, 0);
                // Dynamically set minDistance to prevent zooming in further
                const currentDistance = camera.position.distanceTo(orbitControls.target);
                orbitControls.minDistance = currentDistance; // Prevent zooming closer than the current distance
                orbitControls.update();

                applyChapterConfig('largeScale');
            },
        },
        fixed: {
            cities: {
                newYork: { lat: 40.7128, lon: -74.0060 },
                paris: { lat: 48.8566, lon: 2.3522 },
                tokyo: { lat: 35.6895, lon: 139.6917 },
            },
            activate: (city) => {
                const { lat, lon } = modeManager.fixed.cities[city];
                switchToFixedView(lat, lon); // Position camera for fixed mode
                enableControls(firstPersonControls); // Activate FirstPersonControls
                applyChapterConfig('fixed');
            },
        },
    };
        
    // track camera when changing LOD
    let previousCameraState = {
        position: new THREE.Vector3(),
        zoom: 1,
    };

    // cleanup
    function cleanupLargeScaleFeatures() {
        // Remove satellite lines from the scene
        satelliteLines.forEach((line, index) => {
            scene.remove(line);
            line.geometry.dispose();
            line.material.dispose();
        });
        satelliteLines.clear();
    }
    
    function switchMode(mode, city) {
        if (currentChapter === mode) return; // Avoid redundant switches

        // Save the current camera state
        previousCameraState.position.copy(camera.position);
        previousCameraState.zoom = camera.zoom;        

        if (mode === 'fixed') {
            modeManager.fixed.activate(city); // Activate fixed mode for the chosen city
        } 
        if (mode === 'smallScale') {
            cleanupLargeScaleFeatures(); // Clean up largeScale-specific features
            modeManager[mode].activate(); // Activate the selected mode
        }
        else if (mode === 'largeScale') {
            
            modeManager[mode].activate(); // Activate the selected mode
        
            // modeManager[mode].activate();

            // Restore camera state for a seamless transition
            camera.position.copy(previousCameraState.position);
            camera.zoom = previousCameraState.zoom;
            camera.updateProjectionMatrix(); // Ensure the updated zoom is applied
        }

        currentChapter = mode; // Update the current mode
    }

    // Refined Threshold-based Mode Switching
    function checkCameraDistance() {
        const cameraDistance = camera.position.length(); // Get the current camera distance
        const threshold = sphereRadius * 8; // Threshold for switching modes

        if (cameraDistance < threshold && currentChapter !== 'largeScale') {
            switchMode('largeScale');
        } else if (cameraDistance >= threshold && currentChapter !== 'smallScale') {
            switchMode('smallScale');
        }
    }

    // First-person fixed view implementation
    function switchToFixedView(lat, lon) {
        const radius = sphereRadius; // Earth's radius
        const fixedPoint = latLonToVector3(lat, lon, radius);

        camera.position.copy(fixedPoint); // Place the camera at the fixed point
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look towards the center of Earth
        camera.updateProjectionMatrix();
    }

    // Simplify chapter controls
    function setupChapterControls() {
        document.getElementById('chapter-smallScale').addEventListener('click', () => switchMode('smallScale'));
        document.getElementById('chapter-largeScale').addEventListener('click', () => switchMode('largeScale'));
    }

    // Apply chapter-specific control settings
    function applyChapterConfig(chapter) {
        const config = modeManager[chapter]?.controls;
        if (!config) return;
    
    }
        
    // Function to add the Earth sphere to match the graticule radius
    function addEarthSphere() {
        const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64); 
        const material = new THREE.MeshStandardMaterial({
            color: 0x000000, //  Earth
            opacity: 1,
            roughness: 2, // Higher roughness to reduce shininess
            metalness: 0.5, // Low metalness for a more diffuse surface
            emissive: 0x000000, // No self-illumination    
            transparent: true,
            alphaHash: true,
            wireframe: wireframe,
            // depthTest: false,
        });

        sphere = new THREE.Mesh(geometry, material);
        sphere.castShadow = true; // Enable shadows for the sphere
        sphere.receiveShadow = true; // Enable receiving shadows    
        pivot.add(sphere); // Add the sphere to the pivot group, so it rotates with the graticules   
        pivot.add(satelliteMesh);     
        
        

        // Add markers for debugging
        // addLocationMarker(40.7128, -74.0060, 0xff0000); // NYC (red)
        // addLocationMarker(48.8566, 2.3522, 0x00ff00); // Paris (green)
        // addLocationMarker(35.6895, 139.6917, 0x0000ff); // Tokyo (blue)

    // Create a debug line from Earth's center to the Sun
    // const sunLineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    // const sunLineGeometry = new THREE.BufferGeometry().setAttribute(
    //     'position',
    //     new THREE.BufferAttribute(new Float32Array(6), 3) // 2 points: start and end
    // );
    // sunLine = new THREE.Line(sunLineGeometry, sunLineMaterial);
    // scene.add(sunLine); // Add to the scene
    }


    init();

    return {
        dispose() {
            window.removeEventListener('resize', onWindowResize);
            cancelAnimationFrame(animationFrameId);
            const container = document.getElementById(containerId);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        }
    };


    /////////////////////////////////////////////////////
    // FETCH EXTERNAL DATA /////////////////////////////

    async function loadAllData() {
        console.log("Attempting to load data...");

        // List of GeoJSON URLs
        const geoJsonUrls = [
            'data/ne_110m_coastline.geojson',
            'data/ne_110m_graticules_10.geojson',
            'data/ne_110m_graticules_5.geojson',
            'data/ne_110m_land.geojson',
            'data/ne_110m_ocean.geojson',
            'data/ne_50m_ocean.geojson'

        ];

        try {
            // Load all GeoJSON data concurrently
            const geoJsonPromises = geoJsonUrls.map(url =>
                fetch(url)
                    .then(res => {
                        if (!res.ok) throw new Error(`Network response was not ok for ${url}`);
                        return res.json();
                    })
                    .then(data => {
                        handleGeoJSONData(url, data);
                        return 'loaded';
                    })
                    .catch(error => {
                        console.error(`Error loading ${url}:`, error);
                        throw error;
                    })
            );

            // Wait for all GeoJSON data to be loaded
            await Promise.all(geoJsonPromises);
            console.log("All GeoJSON data loaded successfully.");
        } catch (error) {
            console.error("Failed to load some GeoJSON data:", error);
        }
    }

    // Handle loaded GeoJSON data
    function handleGeoJSONData(url, data) {
        switch (url) {

            case 'data/ne_110m_graticules_5.geojson':
                console.log("Loaded graticules:", data);
                addGraticulesToScene(data);
                break;


            case 'data/ne_110m_coastline.geojson':
                // Example: Handle contour line GeoJSON
                console.log("loaded coastlines:", data);
                addCoastlinesToScene(data);
                break;

            case 'data/ne_110m_land.geojson':
                // Example: Handle contour line GeoJSON
                // console.log("loaded land:", data);
                // addLandToScene(data);
                break;

            case 'data/ne_50m_ocean.geojson':
                // Example: Handle contour line GeoJSON
                console.log("loaded ocean:", data);
                // addOceanToScene(data);
                break;
    
    

            // case '/remotesensing/assets/data/CellularTowers_FeaturesToJSON_HIFLD_AOI_20231204.geojson':
            //     // Example: Handle cell tower points GeoJSON
            //     console.log("Loaded cellular towers:", data);
            //     addCellTowersToScene(data);
            //     break;


            default:
                console.warn('Unrecognized GeoJSON URL:', url);
                break;
        }
    }


    // line data rendering ////////

    // add coastlines
    function addCoastlinesToScene(data) {
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            opacity: 0.75,
            alphaHash: true,
            }); 
        const radius = 1; // Sphere radius, assuming the sphere's radius is 1

        data.features.forEach(feature => {
            const coordinates = feature.geometry.coordinates;

            // GeoJSON geometries might contain different types (MultiLineString or LineString), handle both
            if (feature.geometry.type === "LineString") {
                const lineGeometry = createLineGeometryFromCoordinates(coordinates, radius);
                const line = new THREE.Line(lineGeometry, lineMaterial);
                pivot.add(line); // Add the coastline line to the scene pivot
            } else if (feature.geometry.type === "MultiLineString") {
                coordinates.forEach(lineString => {
                    const lineGeometry = createLineGeometryFromCoordinates(lineString, radius);
                    const line = new THREE.Line(lineGeometry, lineMaterial);
                    pivot.add(line);
                });
            }
        });
    }

    // Add graticules to the scene
    function addGraticulesToScene(data) {
        const lineMaterial = new THREE.LineBasicMaterial({ 
                // color: 0xaaaaaa, 
                color: 0x444444,
                opacity: 0.5,
                alphaHash: true,
                visible: true,
                transparent: false,
            }); 


        const radius = sphereRadius; // Make sure the radius matches the sphere's radius

        data.features.forEach(feature => {
            const coordinates = feature.geometry.coordinates;

            if (feature.geometry.type === "LineString") {
                const lineGeometry = createLineGeometryFromCoordinates(coordinates, radius);
                const line = new THREE.Line(lineGeometry, lineMaterial);
                pivot.add(line);
            } else if (feature.geometry.type === "MultiLineString") {
                coordinates.forEach(lineString => {
                    const lineGeometry = createLineGeometryFromCoordinates(lineString, radius);
                    const line = new THREE.Line(lineGeometry, lineMaterial);
                    pivot.add(line);
                });
            }
        });
    }

    // function addLocationMarker(lat, lon, color) {
    //     const markerMaterial = new THREE.MeshBasicMaterial({ color });
    //     const markerGeometry = new THREE.SphereGeometry(0.01, 16, 16); // Tiny marker
    //     const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    //     marker.position.copy(latLonToVector3(lat, lon, sphereRadius)); // Position marker on the sphere
    //     pivot.add(marker); // Add marker to the rotating Earth
    // }
    

    // Helper function to create THREE.BufferGeometry from GeoJSON coordinates
    function createLineGeometryFromCoordinates(coordinates, radius) {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        coordinates.forEach(([lon, lat]) => {
            const vertex = latLonToVector3(lat, lon, radius);
            vertices.push(vertex.x, vertex.y, vertex.z);
        });

        const verticesFloat32 = new Float32Array(vertices);
        geometry.setAttribute('position', new THREE.BufferAttribute(verticesFloat32, 3));

        return geometry;
    }


    // polygon data rendering ////////////


    // Function to add ocean polygons to the scene
        
    // Convert geographic coordinates (lat, lon) to 3D cartesian coordinates
    function latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to radians
        const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to radians

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
    }



    /// misc window stuff

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // interactive response curves

    // log for sim speed
    function logslider(position, maxSpeed = 20000) {
        // position will be between 0 and 100
        const minp = 0;
        const maxp = 100;

        const minv = Math.log(1); // Natural log of 1
        const maxv = Math.log(maxSpeed); // Natural log of the maximum speed ceiling

        // Calculate adjustment factor
        const scale = (maxv - minv) / (maxp - minp);

        return Math.exp(minv + scale * (position - minp));
    }
        
    // exp for vertical exaggeration
    // map exponential target value back to the slider's 0-100 range
    function mapExponentialToSlider(value, minExp, maxExp) {
        const logValue = Math.log10(value);
        return ((logValue - minExp) / (maxExp - minExp)) * 100;
    }
    
    function mapSliderToExponential(value, minExp, maxExp) {
        const scale = minExp + (value / 100) * (maxExp - minExp);
        return Math.pow(10, scale);
    }
            
    function initializeSlider() {

        // Distance exaggeration slider
        const exaggerationSlider = document.getElementById("exaggeration-slider");
        const exaggerationOutput = document.getElementById("exaggeration-value");
        const initialCompressionFactor = 1.0;
    
        // Function to get min and max for vertical exaggeration based on the chapter
        function getExaggerationRange() {
            if (currentChapter === 'fixed') {
                return { minExp: Math.log10(0.05), maxExp: Math.log10(1) }; // Fixed chapter range
            } else {
                return { minExp: Math.log10(0.1), maxExp: Math.log10(25) }; // smallScale chapter range
            }
        }
    
        // Set initial values for distance exaggeration
        let { minExp, maxExp } = getExaggerationRange();
        exaggerationSlider.value = mapExponentialToSlider(initialCompressionFactor, minExp, maxExp);
        distanceCompressionFactor = initialCompressionFactor;
        exaggerationOutput.textContent = distanceCompressionFactor.toFixed(2) + "x";
    
        // Update slider behavior dynamically on input
        exaggerationSlider.addEventListener("input", (event) => {
            const rawValue = parseFloat(event.target.value);
            ({ minExp, maxExp } = getExaggerationRange());
            distanceCompressionFactor = mapSliderToExponential(rawValue, minExp, maxExp);
            exaggerationOutput.textContent = distanceCompressionFactor.toFixed(2) + "x";
        
            // console.log("Distance Compression Factor:", distanceCompressionFactor);
        
            // Update positions dynamically
            if (satelliteMesh) debounce(updateSatellitePositions(satelliteMesh, false),50);
            if (geostationaryInstancedMesh) debounce(updateSatellitePositions(geostationaryInstancedMesh, true),50);
        });
        
        // Simulation speed slider
        const speedSlider = document.getElementById("speed-slider");
        const speedOutput = document.getElementById("speed-value");
        const initialSpeedMultiplier = 1;
    
        // Set initial values for simulation speed
        speedSlider.value = 0; // Default position at 1x speed
        timeMultiplier = initialSpeedMultiplier;
        speedOutput.textContent = timeMultiplier.toFixed(0) + "x";
    
        // Function to get the maximum speed ceiling based on the chapter
        function getMaxSpeedForChapter() {
            return currentChapter === 'smallScale' ? 20000 : 500; // 20,000 for smallScale, 500 for fixed
        }
    
        // Update speed slider dynamically on input
        speedSlider.addEventListener("input", (event) => {
            const sliderPosition = parseFloat(event.target.value);
            const maxSpeed = getMaxSpeedForChapter(); // Get dynamic ceiling
            timeMultiplier = logslider(sliderPosition, maxSpeed);
            speedOutput.textContent = timeMultiplier.toFixed(0) + "x";
            let displayTime = simulationTime.toUTCString().replace("GMT", "UTC");
            document.getElementById("simulation-time").textContent = displayTime;
    
            // Initial display
            document.getElementById("simulation-time").textContent = simulationTime.toUTCString().replace("GMT", "UTC");
        });
    
        // Reset button functionality
        const resetButton = document.getElementById("reset-button");
        resetButton.addEventListener("click", () => {
            // Reset exaggeration slider
            ({ minExp, maxExp } = getExaggerationRange()); // Dynamically get range for reset
            exaggerationSlider.value = mapExponentialToSlider(initialCompressionFactor, minExp, maxExp);
            distanceCompressionFactor = initialCompressionFactor;
            exaggerationOutput.textContent = distanceCompressionFactor.toFixed(2) + "x";
    
            // Reset simulation speed slider
            speedSlider.value = 0; // Position for 1x speed
            timeMultiplier = initialSpeedMultiplier;
            speedOutput.textContent = timeMultiplier.toFixed(0) + "x";
    
            // Update satellite positions only if the satelliteMesh is defined
            if (satelliteMesh) {
                debounce(updateSatellitePositions(satelliteMesh),50);
            
            }
        });
    }
    

    // scale bar
    // function createScaleBar() {
    //     const scaleBar = document.createElement("div");
    //     scaleBar.id = "scale-bar";
    //     scaleBar.style.position = "absolute";
    //     scaleBar.style.height = "20px"; // Thickness of the scale bar
    //     scaleBar.style.backgroundColor = "#ffd700"; // Gold color
    //     document.body.appendChild(scaleBar);
    
    //     // Optional label for the scale bar
    //     const scaleBarLabel = document.createElement("div");
    //     scaleBarLabel.id = "scale-bar-label";
    //     scaleBarLabel.style.position = "absolute";
    //     scaleBarLabel.style.color = "#ffd700";
    //     scaleBarLabel.style.fontSize = "12px";
    //     scaleBarLabel.style.fontFamily = "Arial, sans-serif";
    //     document.body.appendChild(scaleBarLabel);
    
    //     return { scaleBar, scaleBarLabel };
    // }
    
    // Calculate the screen-space radius of Earth and update the scale bar position and length
    // function updateScaleBar(camera, pivot, sphereRadiusKm, scaleBarElements) {
    //     const { scaleBar, scaleBarLabel } = scaleBarElements;
    
    //     // Project Earth's center to screen space
    //     const earthCenter = new THREE.Vector3(0, 0, 0).applyMatrix4(pivot.matrixWorld).project(camera);
    //     const screenCenterX = (earthCenter.x * 0.5 + 0.5) * window.innerWidth;
    //     const screenCenterY = (1 - (earthCenter.y * 0.5 + 0.5)) * window.innerHeight;
    
    //     // Define a 3D point on Earth's surface along the x-axis
    //     const surfacePoint = new THREE.Vector3(sphereRadiusKm, 0, 0).applyMatrix4(pivot.matrixWorld).project(camera);
    //     const surfacePointX = (surfacePoint.x * 0.5 + 0.5) * window.innerWidth;
    //     const surfacePointY = (1 - (surfacePoint.y * 0.5 + 0.5)) * window.innerHeight;
    
    //     // Calculate the screen-space radius of Earth
    //     const earthRadiusScreen = Math.sqrt(
    //         Math.pow(screenCenterX - surfacePointX, 2) +
    //         Math.pow(screenCenterY - surfacePointY, 2)
    //     );
    
    //     // Calculate the position at 315 degrees from the Earth's center in screen space
    //     const angleRadians = (315 * Math.PI) / 180;
    //     const scaleBarX = screenCenterX + earthRadiusScreen * Math.cos(angleRadians);
    //     const scaleBarY = screenCenterY + earthRadiusScreen * Math.sin(angleRadians);
    
    //     // Update scale bar length based on the screen-space Earth radius
    //     const scaleBarLengthPx = earthRadiusScreen / 100; // Adjust scale bar length proportionally
    
    //     // Set scale bar styles for position and length
    //     scaleBar.style.width = `${scaleBarLengthPx}px`;
    //     // scaleBar.style.left = `${scaleBarX}px`;
    //     // scaleBar.style.top = `${scaleBarY}px`;
    //     // scaleBar.style.transform = `translate(-50%, -50%) rotate(-45deg)`; // Rotate to 315 degrees
    
    //     // Update scale bar label
    //     // scaleBarLabel.style.left = `${scaleBarX + scaleBarLengthPx / 2}px`;
    //     // scaleBarLabel.style.top = `${scaleBarY}px`;
    //     // scaleBarLabel.innerHTML = `${(scaleBarLengthPx * (sphereRadiusKm / earthRadiusScreen)).toFixed(0)} km`; // Approximate real-world length
    // }
    
                
    // function createScaleBarLabel(scaleBarLengthKm) {
    //     const scaleBarLabel = document.createElement("div");
    //     scaleBarLabel.id = "scale-bar-label";
    //     scaleBarLabel.style.position = "absolute";
    //     scaleBarLabel.style.color = "#ffd700";
    //     scaleBarLabel.style.fontSize = "12px";
    //     scaleBarLabel.style.fontFamily = "Arial, sans-serif";
    //     scaleBarLabel.innerHTML = `${scaleBarLengthKm.toFixed(0)} km`; // Label showing "6371 km"
    //     document.body.appendChild(scaleBarLabel);
    // }
    
    // function updateScaleBarLabelPosition(scaleBarLengthKm) {
    //     const scaleBarLabel = document.getElementById("scale-bar-label");
    //     if (!scaleBarLabel) return;
    
    //     const scaleBarPosition = new THREE.Vector3(scaleBarLengthKm / earthRadiusKm / 2, 0, 0);
    //     scaleBarPosition.applyMatrix4(pivot.matrixWorld); // Get world position of the scale bar end
    //     const projectedPosition = scaleBarPosition.project(camera);
    
    //     // Convert to screen space
    //     const screenX = (projectedPosition.x * 0.5 + 0.5) * window.innerWidth;
    //     const screenY = (1 - (projectedPosition.y * 0.5 + 0.5)) * window.innerHeight;
    
    //     // Update label position
    //     scaleBarLabel.style.left = `${screenX}px`;
    //     scaleBarLabel.style.top = `${screenY}px`;
    // }
    
    
        function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        // Adjust z position based on new window width
        const isMobile = window.innerWidth <= 768;
        camera.position.z = isMobile ? baseZ * mobileScaleFactor : baseZ;
    }
                


    }
