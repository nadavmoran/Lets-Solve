import solveCenters from "./solveCenters.js";
import {cubeElement} from './Constants.js';
import {getPermutationFromCube} from "./cubeConvertor.js";
import {sleep} from './tools.js';

async function solveCube() {
  var cube = cubeElement.value;
  solveCenters();
  await sleep(100);
  console.log(getPermutationFromCube(cube.cube));
  console.log(cube.orientation.getOrientation(cube.cube));
}

document.getElementById('solver').onclick = solveCube;
