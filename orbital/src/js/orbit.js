import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

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

        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xC0C0C0, 0);
        document.getElementById(containerId).appendChild(renderer.domElement);

        const customCharSet = ' g❣♥cx6☹%!&*m☺☻  ';
        effect = new AsciiEffect(renderer, customCharSet, { invert: true, resolution: 0.4, scale: 1.0, color: false });
        effect.setSize(window.innerWidth, window.innerHeight);
        effect.domElement.style.color = 'blue';
        effect.domElement.style.backgroundColor = 'white';

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        const ambientLight = new THREE.AmbientLight(0x404040, 5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        pivot = new THREE.Group();
        scene.add(pivot);

        // Create a low-resolution sphere (to optimize performance)
        const geometry = new THREE.SphereGeometry(1, 32, 32); // 32 segments, adjust for more detail if needed
        const material = new THREE.MeshPhongMaterial({
            color: 0x00EB79,
            wireframe: wireframe,
            opacity: 0.75,
        });

        const sphere = new THREE.Mesh(geometry, material);
        pivot.add(sphere);

        window.addEventListener('resize', onWindowResize, false);
        animate();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        if (isRotationEnabled) {
            pivot.rotation.y += 0.0005;
        }

        controls.update();

        if (isAsciiEnabled) {
            effect.render(scene, camera);
        } else {
            renderer.render(scene, camera);
        }
    }

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
}
