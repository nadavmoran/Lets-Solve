import {dim} from "./constants.js";

export let updateCubeFace = {x: updateX, y: updateY, z: updateZ};

/**
 * Updates a x axis arry of the cube
 * @param cube {array} cube to update
 * @param face the updated face
 * @param index the index of the face
 */
function updateX(cube, face, index) {
  for (var y = 0; y < dim; y++)
    for (var z = 0; z < dim; z++) cube[index][y][z] = face[y][z];
}

/**
 * Updates a y axis arry of the cube
 * @param cube {array} cube to update
 * @param face the updated face
 * @param index the index of the face
 */
function updateY(cube, face, index) {
  for (var x = 0; x < dim; x++)
    for (var z = 0; z < dim; z++) cube[x][index][z] = face[x][z];
}

/**
 * Updates a z axis arry of the cube
 * @param cube {array} cube to update
 * @param face the updated face
 * @param index the index of the face
 */
function updateZ(cube, face, index) {
  for (var x = 0; x < dim; x++)
    for (var y = 0; y < dim; y++) cube[x][y][index] = face[x][y];
}
