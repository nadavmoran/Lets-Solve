import { dim } from "./Constants.js";
import { mat2d } from "./Modules/index.js";

export function turnX(cube, index) {
  let updated_face = [[], [], []];
  for (let y = 0; y < dim; y++) {
    for (let z = 0; z < dim; z++) {
      var qb = cube[index+1][y][z];
      var matrix = updateCords(qb.y, qb.z);
      var new_y = Math.round(matrix[4]);
      var new_z = Math.round(matrix[5]);
      updated_face[new_y+1][new_z+1] = qb;
      qb.update(Math.round(qb.x), new_y, new_z);
    }
  }
  updateX(cube, updated_face, index+1);
}

export function turnY(cube, index) {
  let updated_face = [[], [], []];
  for (let x = 0; x < dim; x++) {
    for (let z = 0; z < dim; z++) {
      var qb = cube[x][index+1][z];
      var matrix = updateCords(qb.x, qb.z);
      var new_x = Math.round(matrix[4]);
      var new_z = Math.round(matrix[5]);
      updated_face[new_x+1][new_z+1] = qb;
      qb.update(new_x, Math.round(qb.y), new_z);
    }
  }
  updateY(cube, updated_face, index+1);
}

export function turnZ(cube, index) {
  let updated_face = [[], [], []];
  for (let x = 0; x < dim; x++) {
    for (let y = 0; y < dim; y++) {
      var qb = cube[x][y][index+1];
      var matrix = updateCords(qb.x, qb.y);
      var new_x = Math.round(matrix[4]);
      var new_y = Math.round(matrix[5]);
      updated_face[new_x+1][new_y+1] = qb;
      qb.update(new_x, new_y, Math.round(qb.z));
    }
  }
  updateZ(cube, updated_face, index+1);
}

function updateCords(x, y) {
  var matrix = mat2d.create();
  mat2d.rotate(matrix, matrix, Math.PI / 2);
  mat2d.translate(matrix, matrix, [x, y]);
  return matrix;
}

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

export function controls(key, cube) {
  if (key == 'r') {
    turnX(cube, 1);
  }
  else if (key == 'm') {
    turnX(cube, 0);
  }
  else if (key == 'l') {
    turnX(cube, -1);
  }
  else if (key == 'u') {
    turnY(cube, -1);
  }
  else if (key == 'e') {
    turnY(cube, 0);
  }
  else if (key == 'd') {
    turnY(cube, 1);
  }
  else if (key == 'f') {
    turnZ(cube, 1);
  }
  else if (key == 's') {
    turnZ(cube, 0);
  }
  else if (key == 'b') {
    turnZ(cube, -1);
  }
}
