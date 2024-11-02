////////
import { orbitalView } from "./orbit.js";
import { solarView } from "./solar.js";
// import { pointCloudLoader } from "./cloudviewer.js";

// visualizations with their respective container IDs
// const visualizations = [
  // { func: orbitalView, container: "threeContainer1" },
  // { func: solarView, container: "threeContainer1"}
  // { func: pointCloudLoader, container: "modelContainer1" },
// ];


const defaultContainer = 'threeContainer1';
orbitalView(defaultContainer);
// solarView(defaultContainer);