import {
  controls,
  pieceOrder,
  centerOrder,
  cubeElement,
  numOfEdges,
  numOfCorners,
  numOfCenters,
  Edges,
  Corners
} from "./Constants.js";
import {resetArray, arraysEqual} from "./tools.js";
import SolveCenters from "./solveCenters.js";

export function getCubeState(cube) {
  var state = [];
  for (var i = 0; i < cube.length; i++) {
    state[i] = [];
    for (var j = 0; j < cube.length; j++) {
      state[i][j] = [];
      for (var k = 0; k < cube.length; k++) {
        state[i][j][k] = cube[i][j][k].name;
      }
    }
  }
}

export function getCenterPermutation(cube) {
  var permutation = [
    cube[1][0][1].name,
    cube[0][1][1].name,
    cube[1][1][2].name,
    cube[2][1][1].name,
    cube[1][1][0].name,
    cube[1][2][1].name
  ];
  return permutation;
}

export function getPermutationFromCube(cube) {
  var edgesPermutation = resetArray(numOfEdges);
  var cornersPermutation = resetArray(numOfCorners);
  //var centersPermutation = resetArray(numOfCenters);

  for (var i = 0; i < cube.length; i++) {
    for (var j = 0; j < cube.length; j++) {
      for (var k = 0; k < cube.length; k++) {
        var pieceName = cube[i][j][k].name;
        if (pieceName.length == 3)
          cornersPermutation[Corners[pieceOrder[i][j][k]]] = Corners[pieceName];
        else if (pieceName.length == 2)
          edgesPermutation[Edges[pieceOrder[i][j][k]]] = Edges[pieceName];
        //else if (pieceName.length == 1) centersPermutation[Centers[pieceOredr[i][j][k].name] = Centers[pieceName];
      }
    }
  }
  return {edges: edgesPermutation, corners: cornersPermutation};
}

/*function solveCube() {
  var cube = cubeElement.value;
  var centersPermutation = getCenterPermutation(cube.cube);
  while (arraysEqual(centersPermutation, centerOrder)) {
    var move = solveCenters(centersPermutation);
    var params = controls(move, cube.cube);
    if (params) cube.turn(params[0], params[1], params[2]);
    centersPermutation = getCenterPermutation(cube.cube);
  }
}*/
