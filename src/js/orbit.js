import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import * as satellite from 'satellite.js';
import Stats from 'stats.js'
import { createNoise2D } from 'simplex-noise';
// import { Earcut } from 'three/src/extras/Earcut.js';

//

// 'W' key toggles wireframe
// 'R' key toggles rotation

export function orbitalView(containerId, onTLELoadComplete) {
    let scene, camera, renderer, controls, pivot, moonPivot, sunMesh;
    let animationFrameId;
    let tleArray;

    let currentChapter = 'sandbox'; // Default chapter


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
    const earthTilt = 23.4 * (Math.PI / 180); // Convert 23.4 degrees to radians
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


    function init() {

        scene = new THREE.Scene();
    
        camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 300000);


        camera.position.set(0, 0, 800); // Start slightly above and in front of the Earth
        camera.position.z = 66; // init
    
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xC0C0C0, 0);
    
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Higher quality shadows
    
        document.getElementById(containerId).appendChild(renderer.domElement);
    
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.dampingFactor = 0.25;
    
        controls.zoomSpeed = 0.666;
        controls.rotateSpeed = 0.25;
    
        controls.minDistance = 10;
        controls.maxDistance = 100;

        // Responsive z-position initialization
        setResponsiveCameraPosition();

        initializeSimulationTime();

    
        addSun();
        updateSunDistance();

    
        // Initialize pivot group before adding the moon or other elements
        pivot = new THREE.Group();
        pivot.rotation.z = earthTilt; // Tilt the entire Earth system by 23.4 degrees on the Z-axis
        scene.add(pivot);

        moonPivot = new THREE.Group();
        scene.add(moonPivot)
    
        addMoon(); 
    
        // Add planets to the scene
        // addPlanet("Mercury", 0xbebebe, 2439.7); // Mercury radius in km
        // addPlanet("Venus", 0xffdd44, 6051.8);   // Venus radius in km
        // addPlanet("Earth", 0x2266ff, 6371);     // Earth radius in km
        // addPlanet("Mars", 0xff4422, 3389.5);    // Mars radius in km
        // addPlanet("Jupiter", 0xddddaa, 69911);  // Jupiter radius in km
        // addPlanet("Saturn", 0xeeddbb, 58232);   // Saturn radius in km
        // addPlanet("Uranus", 0xaaffff, 25362);   // Uranus radius in km
        // addPlanet("Neptune", 0x4466ff, 24622);  // Neptune radius in km
    
        addEarthSphere();

        // scrollytelling controls
        setupChapterControls();

        loadTLEData(); // Fetch and visualize the TLE data from node server
    
        // Load and visualize the graticules
        loadAllData();

        initializeSlider();

        // scaleBar = createScaleBar();


        window.addEventListener('resize', onWindowResize, false);
        onWindowResize(); // run once

        // camera.rotation.set(-earthTilt);


        animate();
    }

    function addSun() {
        // Ambient and directional lights (your existing code)
        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
    
        directionalLight = new THREE.DirectionalLight(0x8a8a8a, 100);
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
    
        // Function to update sun's distance based on current compression factor
        function updateSunDistance() {
            const sunDistanceFromEarth = 149.6e6 * scaleFactor * distanceCompressionFactor;
            sunMesh.position.set(sunDistanceFromEarth, 0, 0);
            directionalLight.position.copy(sunMesh.position);
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
        
    // model planets

    // const orbitScaleFactor = 20; // Adjust for more proportionate orbits

    // const distanceScaleFactor = 0.05;

    // function calculatePlanetPosition(planet, time) {
    //     const orbitalParams = {
    //         Mercury: { a: 57.91e6 * distanceScaleFactor, e: 0.205, i: 7.0, T: 0.24 },
    //         Venus: { a: 108.2e6 * distanceScaleFactor, e: 0.007, i: 3.4, T: 0.62 },
    //         Earth: { a: 149.6e6 * distanceScaleFactor, e: 0.017, i: 0.0, T: 1.0 },
    //         Mars: { a: 227.9e6 * distanceScaleFactor, e: 0.093, i: 1.85, T: 1.88 },
    //         Jupiter: { a: 778.5e6 * distanceScaleFactor, e: 0.049, i: 1.3, T: 11.86 },
    //         Saturn: { a: 1.429e9 * distanceScaleFactor, e: 0.056, i: 2.49, T: 29.46 },
    //         Uranus: { a: 2.871e9 * distanceScaleFactor, e: 0.046, i: 0.77, T: 84.01 },
    //         Neptune: { a: 4.495e9 * distanceScaleFactor, e: 0.009, i: 1.77, T: 164.8 }
    //     };
    
    //     const { a, e, i, T } = orbitalParams[planet];
    
    //     const angle = (2 * Math.PI * time) / T;
    //     const x = a * (Math.cos(angle) - e) * scaleFactor * distanceCompressionFactor;
    //     const z = a * Math.sin(angle) * Math.sqrt(1 - e ** 2) * scaleFactor * distanceCompressionFactor;
            
    //     const cosInclination = Math.cos(i * (Math.PI / 180));
    //     const sinInclination = Math.sin(i * (Math.PI / 180));
    //     const adjustedY = 0 * cosInclination - z * sinInclination;
    //     const adjustedZ = 0 * sinInclination + z * cosInclination;
    
    //     const sunPosition = directionalLight.position;
    //     return new THREE.Vector3(x + sunPosition.x, adjustedY + sunPosition.y, adjustedZ + sunPosition.z);
    // }
            

    // const sizeScaleFactor = 0.5;

    // function addPlanet(planetName, color, relativeRadius) {
    //     const planetRadius = sphereRadius * (relativeRadius / earthRadiusKm) * scaleFactor;
    //     const geometry = new THREE.SphereGeometry(planetRadius, 32, 32);
    //     const material = new THREE.MeshStandardMaterial({ color });
    //     const planetMesh = new THREE.Mesh(geometry, material);
    //     scene.add(planetMesh);
    //     planets.push({ name: planetName, mesh: planetMesh });
    // }
    
    
    // irl satellite stuff

// Load TLE data from cached JSON file
// with loading screen
// todo: separate loading screen to main.js config

let satelliteMesh;
let sandboxInstancedMesh, fixedInstancedMesh, geosynchronousInstancedMesh, geostationaryInstancedMesh, sunSynchronousInstancedMesh;


function loadTLEData() {
    fetch('https://orbital-bbfd.onrender.com/satellites')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load cached TLE data');
            return response.json();
        })
        .then(tleData => {
            const tleArray = tleData.satellites; // Extract satellites array
            console.log("Fetched TLE Data:", tleArray);

            if (!Array.isArray(tleArray)) throw new Error('Invalid TLE data format: Expected an array');

            const geostationaryTLEs = [];
            const geosynchronousTLEs = [];
            const sunSynchronousTLEs = [];
            const nonGeostationaryTLEs = [];

            // Classify satellites into geostationary, geosynchronous, and non-geostationary
            tleArray.forEach((sat, i) => {
                try {
                    const satrec = satellite.twoline2satrec(sat.tleLine1.trim(), sat.tleLine2.trim());
                    const inclination = satrec.inclo * (180 / Math.PI); // Convert inclination to degrees
                    const eccentricity = satrec.ecco; // Orbital eccentricity
                    const period = (2 * Math.PI) / satrec.no; // Orbital period in minutes

                    if (
                        Math.abs(inclination) < 0.1 && // Near-zero inclination (equatorial orbit)
                        Math.abs(period - 1436) < 1 // Orbital period close to 1436 minutes
                    ) {
                        geostationaryTLEs.push(sat);
                    } else if (Math.abs(period - 1436) < 10) {
                        // Geosynchronous classification
                        geosynchronousTLEs.push(sat);
                    } else if (
                        Math.abs(inclination - 98) < 2 && // Near 98° inclination
                        Math.abs(period - 100) < 5 // Orbital period close to 100 minutes
                    ) {
                        // Sun-synchronous classification
                        sunSynchronousTLEs.push(sat);
                    } else {
                        // Non-geostationary satellites
                        nonGeostationaryTLEs.push(sat);
                    }
                } catch (error) {
                    console.error(`Error parsing TLE at index ${i}:`, sat, error);
                }
            });

            console.log("Geostationary TLEs:", geostationaryTLEs.length);
            console.log("Geosynchronous TLEs:", geosynchronousTLEs.length);
            console.log("Sun-Synchronous TLEs:", sunSynchronousTLEs.length);
            console.log("Non-Geostationary TLEs:", nonGeostationaryTLEs.length);

            createSatelliteMeshes(geostationaryTLEs, geosynchronousTLEs, sunSynchronousTLEs, nonGeostationaryTLEs);

            onTLELoadComplete(); // Callback when TLE data is successfully loaded
        })
        .catch(error => {
            console.error('Failed to load TLE data:', error);
            onTLELoadComplete(); // Trigger callback even if loading fails
        });
}

function createSatelliteMeshes(geostationaryTLEs, geosynchronousTLEs, sunSynchronousTLEs, nonGeostationaryTLEs) {
    // Define materials
    const geostationaryMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, // Green for geostationary satellites
        metalness: 1,
        roughness: 0.2,
        wireframe: false,
        transparent: true,
        opacity: 0.8,
        // visible: false,

    });

    const geosynchronousMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, // Blue for geosynchronous satellites
        metalness: 1,
        roughness: 0.2,
        wireframe: false,
        transparent: true,
        opacity: 0.5,
        // visible: false,
    });

    const sunSynchronousMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff00, // Yellow for sun-synchronous satellites
        metalness: 1,
        roughness: 0.2,
        wireframe: false,
        transparent: true,
        opacity: 0.8,
        // visible: false,
    });

    const nonGeostationaryMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000, // Red for non-geostationary satellites
        metalness: 1,
        roughness: 0.2,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        // visible: false,

    });

    // Create instanced meshes for geostationary, geosynchronous, and non-geostationary satellites
    geostationaryInstancedMesh = createSatelliteInstancedMesh(geostationaryTLEs, geostationaryMaterial, false, true);
    geosynchronousInstancedMesh = createSatelliteInstancedMesh(geosynchronousTLEs, geosynchronousMaterial, false, true);
    sunSynchronousInstancedMesh = createSatelliteInstancedMesh(sunSynchronousTLEs, sunSynchronousMaterial, false, false);
    sandboxInstancedMesh = createSatelliteInstancedMesh(nonGeostationaryTLEs, nonGeostationaryMaterial, false, false);
    fixedInstancedMesh = createSatelliteInstancedMesh(nonGeostationaryTLEs, nonGeostationaryMaterial, true, false);

    // Add sandbox view as default
    scene.add(sandboxInstancedMesh);
    scene.add(geostationaryInstancedMesh);
    scene.add(geosynchronousInstancedMesh);
    scene.add(sunSynchronousInstancedMesh); // Add sun-synchronous satellites to the scene
    satelliteMesh = sandboxInstancedMesh;

    console.log("Satellite meshes created and added to scene.");
}

// vars for LOD levels
const MIN_DISTANCE = 8; // Minimum distance to start high LOD visibility
const MAX_DISTANCE = 40; // Maximum distance for low LOD visibility
// let MIN_VISIBLE_PERCENTAGE = 0.3; // N% of satellites visible at low detail
// let MAX_VISIBLE_PERCENTAGE = 1.0; // 100% of satellites visible at high detail

// vars for satellite size scaling
let MIN_SCALE = 0.15; // Minimum size when zoomed in
let MAX_SCALE = 1.25; // Maximum size when zoomed out


const satelliteTrails = new Map(); // Map satellite index to trail data
const maxTrailLength = 10; // Maximum number of points per trail


const frustum = new THREE.Frustum();
const cameraViewProjectionMatrix = new THREE.Matrix4();

function isSatelliteVisible(position) {
    camera.updateMatrixWorld(); // Ensure camera matrix is up-to-date
    cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

    return frustum.containsPoint(position);
}


// function initializeSatelliteTrails(instancedMesh) {
//     if (!trailsEnabled || !instancedMesh) return;

//     const trailMaterial = new THREE.LineBasicMaterial({
//         color: 0xff0000,
//         opacity: 1,
//         // transparent: true,
//     });

//     for (let i = 0; i < instancedMesh.count; i++) {
//         const trailGeometry = new THREE.BufferGeometry();
//         const positions = new Float32Array(maxTrailLength * 3); // Each point has x, y, z
//         trailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//         const line = new THREE.Line(trailGeometry, trailMaterial);
//         scene.add(line);

//         satelliteTrails.set(i, { positions, line, index: 0 }); // Initialize trail data
//     }
// }


// create satellite instances (scale dependent appearance)
function createSatelliteInstancedMesh(tleArray, material, isFixedView = false, isGeostationary = false) {
    const instanceCount = tleArray.length;
    const satelliteGeometry = isFixedView
        ? new THREE.SphereGeometry(0.002, 16, 16) // Smaller, high-resolution for fixed large-scale view
        : new THREE.SphereGeometry(0.003, 2, 3); // Larger, low-resolution for sandbox small-scale view

    const instancedMesh = new THREE.InstancedMesh(satelliteGeometry, material, instanceCount);
    const dummy = new THREE.Object3D();
    const elapsedSeconds = (simulationTime.getTime() / 1000) % 86400; // Earth day in seconds
    const rotationAngle = isGeostationary ? (elapsedSeconds * earthRotationSpeed) % (2 * Math.PI) : 0; // Rotation for geostationary satellites
    const gmst = satellite.gstime(simulationTime); // Greenwich Mean Sidereal Time

    tleArray.forEach((sat, i) => {
        const satrec = satellite.twoline2satrec(sat.tleLine1.trim(), sat.tleLine2.trim());
        instancedMesh.userData[i] = { satrec };

        // Propagate TLE to get initial position
        const positionAndVelocity = satellite.propagate(satrec, simulationTime);
        if (!positionAndVelocity.position) {
            console.error(`Failed to propagate satellite at index ${i}`);
            return; // Skip this satellite if propagation fails
        }

        // Convert ECI to geodetic (latitude, longitude, altitude)
        const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
        const altitude = positionGd.height * scaleFactor * distanceCompressionFactor; // Apply vertical exaggeration
        const latitude = satellite.degreesLat(positionGd.latitude);
        const longitude = satellite.degreesLong(positionGd.longitude);

        // Calculate 3D position
        const currentPosition = latLonToVector3(latitude, longitude, sphereRadius + altitude);


        // Apply Earth's rotation if geostationary
        if (isGeostationary) {
            currentPosition.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationAngle); // Rotate along the Y-axis
        }

        // Set the position in the instanced mesh
        dummy.position.copy(currentPosition);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
    });

    return instancedMesh;
}

function setResponsiveCameraPosition() {
    const isMobile = window.innerWidth <= 768;

    if (currentChapter === 'sandbox') {
        camera.position.z = isMobile ? baseZ * mobileScaleFactor : baseZ;
        controls.minDistance = isMobile ? 50 : 10;
        controls.maxDistance = isMobile ? 500 : 100;
    } else if (currentChapter === 'fixed') {
        camera.position.z = isMobile ? 40 : 30; // Example fixed zoom for mobile
        controls.minDistance = isMobile ? 20 : 30;
        controls.maxDistance = isMobile ? 40 : 50;
    }
}

function switchChapterMesh(tleArray, isFixedView) {
    // Remove the current mesh from the scene
    if (satelliteMesh) scene.remove(satelliteMesh);

    // Clear satellite lines if leaving fixed view
    if (!isFixedView) {
        clearSatelliteLines();
    }

    // Switch the active mesh
    satelliteMesh = isFixedView ? fixedInstancedMesh : sandboxInstancedMesh;
    scene.add(satelliteMesh);

    // Update positions from the previous mesh
    const oldMesh = isFixedView ? sandboxInstancedMesh : fixedInstancedMesh;
    if (oldMesh) {
        const dummy = new THREE.Object3D();
        for (let i = 0; i < oldMesh.count; i++) {
            oldMesh.getMatrixAt(i, dummy.matrix);
            satelliteMesh.setMatrixAt(i, dummy.matrix);
        }
        satelliteMesh.instanceMatrix.needsUpdate = true;
    }
}


    
    let simulationTime; // Starting time for the simulation
    const timeDelta = 1000 / 24; // 1-second increment per frame @ N fps divisor
    let timeMultiplier = 1000; // Overall simulation speed multiplier

    // Function to fetch and set initial simulation time
    function initializeSimulationTime() {
        fetch('https://orbital-bbfd.onrender.com/satellites') // Fetch from render server
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch last cache time");
                }
                return response.json();
            })
            .then(data => {
                // Set simulationTime to cached timestamp from the server response
                simulationTime = new Date(data.timestamp);
                document.getElementById("simulation-time").textContent = simulationTime.toUTCString().replace("GMT", "UTC");
            })
            .catch(error => {
                console.error("Error loading cache time:", error);
                // Fallback to a default date if fetch fails
                simulationTime = new Date('2024-11-01T00:00:00Z');
            });
    }
        
    // Update simulation time centrally
    function updateSimulationTime() {
        simulationTime = new Date(simulationTime.getTime() + timeDelta * timeMultiplier);
        let displayTime = simulationTime.toUTCString().replace("GMT", "UTC");
        document.getElementById("simulation-time").textContent = displayTime;
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

    // Function to update satellite positions with the current distanceCompressionFactor
    // const frameInterval = 20; 
    // let frameCount = 0;

    const satelliteLines = new Map(); // Map satellite index to its line

    function updateSatellitePositions(instancedMesh, isGeostationary = false) {
        const gmst = satellite.gstime(simulationTime); // Greenwich Mean Sidereal Time
        const dummy = new THREE.Object3D();
        const elapsedSeconds = (simulationTime.getTime() / 1000) % 86400; // Earth day in seconds
        const rotationAngle = isGeostationary ? (elapsedSeconds * earthRotationSpeed) % (2 * Math.PI) : 0; // Rotation for geostationary satellites

        const earthCenter = new THREE.Vector3(0, 0, 0); // Earth's center
        const tiltedYAxis = new THREE.Vector3(0, 1, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt); // Earth's tilted Y-axis
    
        for (let i = 0; i < instancedMesh.count; i++) {
            const { satrec } = instancedMesh.userData[i];
            const positionAndVelocity = satellite.propagate(satrec, simulationTime);
            if (!positionAndVelocity.position) continue;
    
            // Convert ECI to geodetic
            const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
            const altitude = positionGd.height * scaleFactor * distanceCompressionFactor; // Dynamically apply vertical exaggeration
            const latitude = satellite.degreesLat(positionGd.latitude);
            const longitude = satellite.degreesLong(positionGd.longitude);
    
            // Calculate 3D position
            const currentPosition = latLonToVector3(latitude, longitude, sphereRadius + altitude);
    
            // Apply Earth's axial tilt (align with equatorial plane)
            currentPosition.applyAxisAngle(new THREE.Vector3(0, 0, 1), earthTilt);
    
            // Apply Earth's rotation if geostationary
            if (isGeostationary) {
                currentPosition.applyAxisAngle(tiltedYAxis, rotationAngle); // Rotate around Earth's tilted axis
            }
    
            // Update satellite position in the instanced mesh
            dummy.position.copy(currentPosition);
            dummy.updateMatrix();
            instancedMesh.setMatrixAt(i, dummy.matrix);


                // Draw or update the line to the Earth's center if in fixed view
                if (currentChapter === 'fixed') {
                    if (!isSatelliteVisible(currentPosition)) {
                        // Remove line if it exists but the satellite is not visible
                        if (satelliteLines.has(i)) {
                            const line = satelliteLines.get(i);
                            scene.remove(line);
                            line.geometry.dispose();
                            line.material.dispose();
                            satelliteLines.delete(i);
                        }
                        continue;
                    }
        
                    if (!satelliteLines.has(i)) {
                        const satLineGeometry = new THREE.BufferGeometry();
                        const positions = new Float32Array(6); // Two points (start and end)
                        satLineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                        const satLineMaterial = new THREE.LineBasicMaterial({ 
                            color: 0xffffff, 
                            transparent: true, 
                            alphaHash: true,
                            opacity: 0.6 
                        });
                        const line = new THREE.Line(satLineGeometry, satLineMaterial);
                        scene.add(line);
                        satelliteLines.set(i, line);
                    }
        
                    // Update the line's geometry
                    const line = satelliteLines.get(i);
                    const positions = line.geometry.attributes.position.array;
                    positions[0] = earthCenter.x;
                    positions[1] = earthCenter.y;
                    positions[2] = earthCenter.z;
                    positions[3] = currentPosition.x;
                    positions[4] = currentPosition.y;
                    positions[5] = currentPosition.z;
                    line.geometry.attributes.position.needsUpdate = true;
                }
                

            }

        instancedMesh.instanceMatrix.needsUpdate = true; 
    }
                                    
    function clearSatelliteLines() {
        satelliteLines.forEach((line, index) => {
            scene.remove(line);
            line.geometry.dispose();
            line.material.dispose();
        });
        satelliteLines.clear();
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

    let lastLat = null;
    let lastLon = null;
      

    if (delta  > interval) {

            stats.begin()
            animationFrameId = requestAnimationFrame(animate);

            updateSimulationTime();

            updateEarthRotation();

            // Update positions for non-geostationary satellites
            if (satelliteMesh) {
                updateSatellitePositions(satelliteMesh, false);
            }

            // Update positions for geostationary satellites
            if (geostationaryInstancedMesh) {
                updateSatellitePositions(geostationaryInstancedMesh, true);
            }

            // Update positions for geosynchronous satellites
            if (geosynchronousInstancedMesh) {
                updateSatellitePositions(geosynchronousInstancedMesh, true);
            }

            if (sunSynchronousInstancedMesh) {
                updateSatellitePositions(sunSynchronousInstancedMesh, true);
            }
        
            updateMoonPosition();
            animateSunRotation();
            updateSunDistance();
            

            // Dynamically switch to fixed views based on the current city
            if (currentChapter === 'fixed') {
                const { lat, lon } = chapterConfig.fixed.coordinates[selectedCity];
                if (lat !== lastLat || lon !== lastLon) { // Prevent redundant calls
                    switchToFixedView(lat, lon);
                    lastLat = lat;
                    lastLon = lon;

                }
            }

            // updateScaleBar(camera, pivot, earthRadiusKm, scaleBarElements);
            
            // // planets moving
            // planets.forEach(({ name, mesh }) => {
            //     const position = calculatePlanetPosition(name, time / 1000); // Scale time if needed
            //     mesh.position.copy(position);
            // });


            controls.update();


            renderer.render(scene, camera);

            stats.end()
            

            delta = delta % interval;

        }
        requestAnimationFrame(animate);
    }


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


    function setupChapterControls() {
        document.getElementById('chapter-sandbox').addEventListener('click', () => {
            currentChapter = 'sandbox';
            switchToSandboxView();
            switchChapterMesh(tleArray, false); // Switch to sandbox mesh
        });
    
        document.getElementById('chapter-newYork').addEventListener('click', () => {
            currentChapter = 'fixed';
            selectedCity = 'newYork';
            switchToFixedView(chapterConfig.fixed.coordinates.newYork.lat, chapterConfig.fixed.coordinates.newYork.lon);
            switchChapterMesh(tleArray, true); // Switch to fixed mesh
        });
    
        document.getElementById('chapter-paris').addEventListener('click', () => {
            currentChapter = 'fixed';
            selectedCity = 'paris';
            switchToFixedView(chapterConfig.fixed.coordinates.paris.lat, chapterConfig.fixed.coordinates.paris.lon);
            switchChapterMesh(tleArray, true); // Switch to fixed mesh
        });
    
        document.getElementById('chapter-tokyo').addEventListener('click', () => {
            currentChapter = 'fixed';
            selectedCity = 'tokyo';
            switchToFixedView(chapterConfig.fixed.coordinates.tokyo.lat, chapterConfig.fixed.coordinates.tokyo.lon);
            switchChapterMesh(tleArray, true); // Switch to fixed mesh
        });
    }
                
    const chapterConfig = {
        sandbox: {
            controls: {
                minDistance: 10,
                maxDistance: 100,
                enablePan: true,
                zoomSpeed: 0.666,
                rotateSpeed: 0.25,
            },
        },
        fixed: {
            coordinates: {
                newYork: { lat: 40.7128, lon: -74.0060 },
                paris: { lat: 48.8566, lon: 2.3522 },
                tokyo: { lat: 35.6895, lon: 139.6917 },
            },
            controls: {
                minDistance: 3, // Adjust zoom levels for the fixed chapter
                maxDistance: 3,
                enablePan: false, // Disable panning for fixed view
                zoomSpeed: 0,
                rotateSpeed: 0,
            },
        },
    };

    function applyChapterConfig(chapter) {
        const config = chapterConfig[chapter];
        if (!config) return;
    
        const { controls: controlsConfig } = config;
    
        if (controlsConfig) {
            controls.minDistance = controlsConfig.minDistance;
            controls.maxDistance = controlsConfig.maxDistance;
            controls.enablePan = controlsConfig.enablePan;
            controls.zoomSpeed = controlsConfig.zoomSpeed;
            controls.rotateSpeed = controlsConfig.rotateSpeed;
        }
    }
    

    function switchToFixedView(lat, lon) {
        // controls.enabled = false; // Disable free camera movement

        applyChapterConfig('fixed'); // Apply chapter config

    
        const radius = sphereRadius; // Slightly above Earth's surface
        const fixedPointLocal = latLonToVector3(lat, lon, radius); // Fixed point in local space
    
        function updateFixedView() {
            // Calculate Earth's rotation in the current simulation time
            const elapsedSeconds = (simulationTime.getTime() / 1000) % 86400; // Earth day in seconds
            const rotationAngle = (elapsedSeconds * earthRotationSpeed) % (2 * Math.PI);
    
            // Reset pivot rotation and apply tilt and rotation
            pivot.rotation.set(0, 0, 0); // Reset previous rotations
            pivot.rotateZ(earthTilt); // Apply Earth's axial tilt
            pivot.rotateY(rotationAngle); // Apply Earth's rotation
    
            // Transform the fixed point using the pivot's world matrix
            const fixedPointWorld = fixedPointLocal.clone().applyMatrix4(pivot.matrixWorld);

    
            // Calculate the final camera position
            const cameraPositionWorld = fixedPointWorld.clone();
    
            // Update the camera's position
            camera.position.copy(cameraPositionWorld);
    
            // Ensure the camera looks directly at the fixed point on the sphere
            camera.lookAt(fixedPointWorld);


            // const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            // const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
            // const marker = new THREE.Mesh(markerGeometry, markerMaterial);
            // marker.position.copy(fixedPointWorld);
            // scene.add(marker);

        }
    
        // Hook into the animation loop
        function animateFixedView() {
            if (currentChapter === 'fixed') {
                updateFixedView();
            }
        }
    
        animateFixedView();

    }
                                    
    function switchToSandboxView() {
        controls.enabled = true; // Enable free camera movement
        camera.position.set(0, 0, 66); // Reset position
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Center of Earth
    
        applyChapterConfig('sandbox'); // Apply sandbox chapter settings
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
        
            
        // Add markers for debugging
        // addLocationMarker(40.7128, -74.0060, 0xff0000); // NYC (red)
        // addLocationMarker(48.8566, 2.3522, 0x00ff00); // Paris (green)
        // addLocationMarker(35.6895, 139.6917, 0x0000ff); // Tokyo (blue)


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

            case 'data/ne_110m_graticules_10.geojson':
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
                color: 0xaaaaaa, 
                opacity: 0.35,
                alphaHash: true,
                linewidth: 1 
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

    function addLocationMarker(lat, lon, color) {
        const markerMaterial = new THREE.MeshBasicMaterial({ color });
        const markerGeometry = new THREE.SphereGeometry(0.01, 16, 16); // Tiny marker
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(latLonToVector3(lat, lon, sphereRadius)); // Position marker on the sphere
        pivot.add(marker); // Add marker to the rotating Earth
    }
    

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
                return { minExp: Math.log10(0.1), maxExp: Math.log10(25) }; // Sandbox chapter range
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
        
            console.log("Distance Compression Factor:", distanceCompressionFactor);
        
            // Update positions dynamically
            if (satelliteMesh) updateSatellitePositions(satelliteMesh, false);
            if (geostationaryInstancedMesh) updateSatellitePositions(geostationaryInstancedMesh, true);
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
            return currentChapter === 'sandbox' ? 20000 : 500; // 20,000 for sandbox, 500 for fixed
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
                updateSatellitePositions(satelliteMesh);
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
