import { orbitalView } from "./orbit.js";

const defaultContainer = 'threeContainer1';

// loading overlay
const loadingOverlay = document.createElement('div');
loadingOverlay.id = 'loadingOverlay';
loadingOverlay.innerHTML = '<div id="loadingText">Loading</div>';
document.body.appendChild(loadingOverlay);

// animate loading text
function animateLoadingText() {
    const loadingText = document.getElementById('loadingText');
    let dotCount = 0;

    const interval = setInterval(() => {
            loadingText.textContent += '.';
            dotCount++;
      
    }, 50);

    console.log("Loading animation started");

    // Stop the animation when overlay is hidden
    return () => {
        clearInterval(interval);
        console.log("Loading animation stopped");
    };
}

// loading animation
const stopAnimation = animateLoadingText();

// hide loading overlay when satellites load
function onSatelliteLoadComplete() {
    setTimeout(() => {
        document.getElementById('loadingOverlay').style.display = 'none';
        stopAnimation(); // Stop the loading text animation
    }, 100); // Delay to ensure visibility
}

// init
orbitalView(defaultContainer, onSatelliteLoadComplete);