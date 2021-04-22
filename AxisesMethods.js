import { dim } from "./Constants.js";

export let updateCubeMatrix = {x: updateX, y: updateY, z: updateZ};

function updateX(cube, face, index) {
  for (var y = 0; y < dim; y++)
    for (var z = 0; z < dim; z++)
      cube[index][y][z] = face[y][z];
}

function updateY(cube, face, index) {
  for (var x = 0; x < dim; x++)
    for (var z = 0; z < dim; z++)
      cube[x][index][z] = face[x][z];
}

function updateZ(cube, face, index) {
  for (var x = 0; x < dim; x++)
    for (var y = 0; y < dim; y++)
      cube[x][y][index] = face[x][y];
}
