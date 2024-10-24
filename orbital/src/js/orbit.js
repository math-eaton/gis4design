import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import * as satellite from 'satellite.js';

// satellite stuff

const tleLine1 = '1 25544U 98067A   21275.54791667  .00000265  00000-0  12841-4 0  9990';
const tleLine2 = '2 25544  51.6447 154.2736 0001996  84.2664  13.1377 15.48854069312036';

const satrec = satellite.twoline2satrec(tleLine1, tleLine2);



//

// 'A' key toggles ascii
// 'W' key toggles wireframe
// 'R' key toggles rotation

export function orbitalView(containerId) {
    let scene, camera, renderer, controls, pivot, effect;
    let animationFrameId;
    let isRotationEnabled = true;
    let wireframe = false;
    let isAsciiEnabled = false; 
    let asciiAdded = false; 
    let directionalLight;
    let sphere; // Global reference to the sphere
    const sphereRadius = 1; // Define the sphere and graticule radius here
    const earthRotationSpeed = 0.0002; // Simulate Earth's rotation speed 
    const earthTilt = 23.4 * (Math.PI / 180); // Convert 23.4 degrees to radians

    let satelliteMesh; // Reference to the satellite mesh


    window.addEventListener('keydown', (event) => {
        if (event.key === 'A' || event.key === 'a') {
            isAsciiEnabled = !isAsciiEnabled;

            const container = document.getElementById(containerId);

            if (isAsciiEnabled && !asciiAdded) {
                container.removeChild(renderer.domElement);
                container.appendChild(effect.domElement);
                controls.dispose(); 
                controls = new OrbitControls(camera, effect.domElement); 
                asciiAdded = true;
            } else if (!isAsciiEnabled && asciiAdded) {
                container.removeChild(effect.domElement);
                container.appendChild(renderer.domElement);
                controls.dispose();
                controls = new OrbitControls(camera, renderer.domElement); 
                asciiAdded = false;
            }
        }
    });

    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5); // Start slightly above and in front of the Earth
        camera.rotation.x = -earthTilt; // Tilt the camera to simulate the Earth's tilt
        camera.position.z = 30;

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xC0C0C0, 0);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Higher quality shadows

        document.getElementById(containerId).appendChild(renderer.domElement);

        // ASCII effect setup
        const customCharSet = ' g❣♥cx6☹%!&*m☺☻  ';
        effect = new AsciiEffect(renderer, customCharSet, { invert: true, resolution: 0.4, scale: 1.0, color: false });
        effect.setSize(window.innerWidth, window.innerHeight);
        effect.domElement.style.color = 'blue';
        effect.domElement.style.backgroundColor = 'white';

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.dampingFactor = 0.25;

        controls.zoomSpeed = 0.25;
        // controls.panSpeed = 0.5;
        controls.rotateSpeed = 0.25;

        controls.minDistance = 10;
        controls.maxDistance = 66;



        initLights()
        // const ambientLight = new THREE.AmbientLight(0x404040, 50);
        // scene.add(ambientLight);

        // const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
        // directionalLight.position.set(5, 5, 5).normalize();
        // scene.add(directionalLight);

        pivot = new THREE.Group();
        pivot.rotation.z = earthTilt; // Tilt the entire Earth system by 23.4 degrees on the Z-axis
        scene.add(pivot);
    
        addEarthSphere();
        addSatellite(); // Add the satellite

        // Load and visualize the graticules
        loadAllData();

        window.addEventListener('resize', onWindowResize, false);
        animate();
    }

    function initLights() {
        // Ambient light for general low-level lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1); 
        scene.add(ambientLight);
        
        // Directional light acting as the Sun (Fixed, static position)
        directionalLight = new THREE.DirectionalLight(0x696969, 100); // Increase intensity to brighten the day side
        directionalLight.position.set(100, 0, 100); // Sun position (far from Earth)
        directionalLight.castShadow = true; // Enable shadows
        scene.add(directionalLight);
        
        const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
        scene.add(hemiLight);
    }

    function addSatellite() {
        const geometry = new THREE.SphereGeometry(0.01, 8, 8); // Increase the satellite size for better visibility
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color for satellite
        satelliteMesh = new THREE.Mesh(geometry, material);

        // Initial satellite position (calculated from TLE data)
        const position = getSatellitePosition();
        satelliteMesh.position.copy(position);
        pivot.add(satelliteMesh); // Add satellite to pivot for rotation
    }

    function getSatellitePosition() {
        // Get the satellite's position in ECI (Earth-Centered Inertial) coordinates
        const now = new Date();
        const positionAndVelocity = satellite.propagate(satrec, now);
        const positionEci = positionAndVelocity.position;
        const gmst = satellite.gstime(now);
        const positionGd = satellite.eciToGeodetic(positionEci, gmst);

        // Extract lat, lon, and altitude
        const longitude = satellite.degreesLong(positionGd.longitude);
        const latitude = satellite.degreesLat(positionGd.latitude);
        const altitude = positionGd.height * 0.001; // Scale the altitude for better visibility

        // Convert to a 3D vector position based on Earth's radius and satellite altitude
        let altitudeFactor = 1;
        const satellitePosition = latLonToVector3(latitude, longitude, sphereRadius + (altitude * altitudeFactor)); // Altitude exaggerated by factor
        return satellitePosition;
    }


    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    // Rotate the Earth pivot group (simulating Earth's rotation)
    if (isRotationEnabled) {
        pivot.rotation.y += earthRotationSpeed;
    }

    controls.update();

    // Update satellite position based on current time
    satelliteMesh.position.copy(getSatellitePosition());

    
    // Render the scene based on whether ASCII effect is enabled or not
    if (isAsciiEnabled) {
        effect.render(scene, camera);
    } else {
        renderer.render(scene, camera);
    }
}

    // Convert geographic coordinates (lat, lon) to 3D cartesian coordinates
    function latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to radians
        const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to radians

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
    }

    // Function to add the Earth sphere to match the graticule radius
    function addEarthSphere() {
        const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64); 
        const material = new THREE.MeshStandardMaterial({
            color: 0x000000, //  Earth
            opacity: 0.85,  
            roughness: 2.8, // Higher roughness to reduce shininess
            metalness: 0.1, // Low metalness for a more diffuse surface
            emissive: 0x000000, // No self-illumination    
            transparent: true,
            alphaHash: true,
            // shininess: 1,
            wireframe: wireframe,
        });

        sphere = new THREE.Mesh(geometry, material);
        sphere.castShadow = true; // Enable shadows for the sphere
        sphere.receiveShadow = true; // Enable receiving shadows    
        pivot.add(sphere); // Add the sphere to the pivot group, so it rotates with the graticules
    }
    

    // Add markers to the sphere using geographic coordinates
    function addGeographicMarkers(points) {
        const markerGeometry = new THREE.SphereGeometry(0.005, 8, 8); // Small marker sphere
        const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        points.forEach(({ lat, lon }) => {
            const marker = new THREE.Mesh(markerGeometry, markerMaterial);
            const position = latLonToVector3(lat, lon, 1); // Sphere radius = 1
            marker.position.copy(position);

            // Add the marker to the scene
            pivot.add(marker);
        });
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // function animate() {
    //     animationFrameId = requestAnimationFrame(animate);
    //     if (isRotationEnabled) {
    //         pivot.rotation.y += 0.0005;
    //     }

    //     controls.update();

    //     if (isAsciiEnabled) {
    //         effect.render(scene, camera);
    //     } else {
    //         renderer.render(scene, camera);
    //     }
    // }

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
            'assets/data/ne_110m_coastline.geojson',
            'assets/data/ne_110m_graticules_10.geojson'
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

            case 'assets/data/ne_110m_graticules_10.geojson':
                console.log("Loaded graticules:", data);
                addGraticulesToScene(data);
                break;


            case 'assets/data/ne_110m_coastline.geojson':
                // Example: Handle contour line GeoJSON
                console.log("loaded coastlines:", data);
                addCoastlinesToScene(data);
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

// add coastlines
function addCoastlinesToScene(data) {
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xffffff,
        opacity: 0.75,
        alphaHash: true,
        linewidth: 1 
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

    // Convert geographic coordinates (lat, lon) to 3D cartesian coordinates
    function latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to radians
        const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to radians

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
    }


}
