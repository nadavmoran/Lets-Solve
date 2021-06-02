import {pieceOrder, cubeElement} from "./Constants.js";

export function getCenterPermutation(cube) {
  var permutation = [cube[1][0][1].type,
                    cube[0][1][1].type,
                    cube[1][1][2].type,
                    cube[2][1][1].type,
                    cube[1][1][0].type,
                    cube[1][2][1]].type;
  return permutation;
}

function getPermutationFromCube(cube) {
  var permutation = [];
  for (var i = 0; i < cube.length; i++) {
    cube[i];
  }
}
