import { dim } from "./Constants.js";
import { mat2d } from "./Modules/index.js";

export function turnX(cube, index) {
  for (let y= 0; y < dim; y++) {
    for (let z = 0; z < dim; z++) {
      var qb = cube[index+1][y][z];
      var cords = updateCords(qb, qb.y, qb.z);
      qb.update(qb.x, cords[0], cords[1]);
    }
  }
}

export function turnY(cube, index) {
  for (let x = 0; x < dim; x++) {
    for (let z = 0; z < dim; z++) {
      var qb = cube[x][index+1][z];
      var cords = updateCords(qb, qb.x, qb.z);
      qb.update(cords[0], qb.y, cords[1]);
    }
  }
}

export function turnZ(cube, index) {
  for (let x = 0; x < dim; x++) {
    for (let y = 0; y < dim; y++) {
      var qb = cube[x][y][index+1];
      var cords = updateCords(qb, qb.x, qb.y);
      qb.update(cords[0], cords[1], qb.z);
    }
  }
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
function updateCords(qb, x, y) {
  var matrix = mat2d.create();
  mat2d.rotate(matrix, matrix, Math.PI / 2);
  mat2d.translate(matrix, matrix, [x, y]);
  return [Math.round(matrix[4]), Math.round(matrix[5])];
}
