import solveCenters from "./solveCenters.js";
import {cubeElement, socket} from "./Constants.js";
import {getPermutationFromCube} from "./cubeConvertor.js";
import {sleep} from "./tools.js";

async function solveCube() {
  var cube = cubeElement.value;
  solveCenters();
  await sleep(100);
  var permutation = getPermutationFromCube(cube.cube);
  var orientation = cube.orientation.getOrientation(cube.cube);
  var state = {
    eo: orientation.edges,
    co: orientation.corners,
    ep: permutation.edges,
    cp: permutation.corners
  };
  sendState(state);
}

async function sendState(state) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(state)
  };
  var response = await fetch("/solution", options);
  var solution = await response.json();
  console.log(solution);
}
document.getElementById("solver").onclick = solveCube;
