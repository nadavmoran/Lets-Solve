import {centerOrder, cubeElement, controls} from "./Constants.js";
import {getKeyByValue, arraysEqual, convertNotations} from "./tools.js";
import {getCenterPermutation} from "./cubeConvertor.js";


const sliceMoves = {
  M: ["F", "D", "U", "B"],
  "M'": ["B", "U", "D", "F"],
  M2: ["D", "B", "F", "U"],
  S: ["R", "U", "D", "L"],
  "S'": ["L", "D", "U", "R"],
  S2: ["D", "R", "L", "U"],
  E: ["F", "R", "B", "L"],
  "E'": ["B", "L", "F", "R"],
  E2: ["R", "B", "L", "F"]
};
const indexToMove = {0: "M2", 1: "S2", 2: "E2"};

export default function solveCenters() {
  var cube = cubeElement.value;
  var centersPermutation = getCenterPermutation(cube.cube);

  if (!arraysEqual(centersPermutation, centerOrder)) {
    centersPermutation = fixCenters(cube, centersPermutation);
    setTimeout(solveCenters, 100);
  }
}

function fixCenters(cube, centersPermutation) {
  var move = getMoveFromState(centersPermutation);
  var params = controls(convertNotations(move), cube.cube);
  if (params) cube.turn(params[0], params[1], params[2]);
  return getCenterPermutation(cube.cube);
}

function getMoveFromState(state) {
  var move = [...state];

  for (var i = 0; i < state.length; i++) {
    if (state[i] == centerOrder[i]) {
      if (move.length == 5) move.splice(i - 1, 1);
      else move.splice(i, 1);
    }
  }
  if (move.length == 4) return getKeyByValue(sliceMoves, move);

  for (var i = 0; i < state.length; i++) {
    if (centerOrder.indexOf(state[i]) == state.indexOf(centerOrder[i]))
      return indexToMove[i];
  }

  return "M";
}

/* function chooseMove(state) {
  var moveOptions = ['M','S','E'];

  for (var i = 0; i < state.length; i++) {
    for (var j = 0; j < moveOptions.length; j++) {
      if (!sliceMoves[moveOptions[j]].includes(state[i]))
        moveOptions.splice(j, 1);
    }
  }
  return moveOptions;
}*/
