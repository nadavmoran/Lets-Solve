import {
  pieceOrder,
  cubeElement,
  numOfEdges,
  numOfCorners,
  numOfCenters,
  pieceOrder,
  Edges,
  Corners
} from "./Constants.js";
import {resetArray} from "./tools.js";

export function getCenterPermutation(cube) {
  var permutation = [
    cube[1][0][1].type,
    cube[0][1][1].type,
    cube[1][1][2].type,
    cube[2][1][1].type,
    cube[1][1][0].type,
    cube[1][2][1].type
  ];
  return permutation;
}

function getPermutationFromCube(cube) {
  var edgesPermutation = resetArray(numOfEdges);
  var cornersPermutation = resetArray(numOfCorners);
  var centersPermutation = resetArray(numOfCenters);

  for (var i = 0; i < cube.length; i++) {
    for (var j = 0; j < cube.length; j++) {
      for (var k = 0; k < cube.length; k++) {
        var pieceName = cube[i][j][k].name;
        if (pieceName.length == 3) cornersPermutation[Corners[pieceOredr[i][j][k].name] = Corners[pieceName];
        else if (pieceName.length == 2) edgesPermutation[Edges[pieceOredr[i][j][k].name] = Edges[pieceName];
        else if (pieceName.length == 1) centersPermutation[Corners[pieceOredr[i][j][k].name] = pieceName;
      }
    }
  }
}
