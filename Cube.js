import * as mat4 from "./Modules/mat4.js";
import * as mat2d from "./Modules/mat2d.js";
import { dim } from "./Constants.js";
import Cubie from "./Cubie.js";

export default class Cube {
  constructor(p) {
    this.cube = [];

    for (let x = -1; x < dim - 1; x++) {
      this.cube[x + 1] = [];
      for (let y = -1; y < dim - 1; y++) {
        this.cube[x + 1][y + 1] = []
        for (let z = -1; z < dim - 1; z++) {
          var matrix = mat4.create();
          mat4.translate(matrix, matrix, [x, y, z]);
          this.cube[x + 1][y + 1][z + 1] = new Cubie(p, matrix, x, y, z);
        }
      }
    }
  }

  show() {
    for (let i = 0; i < dim; i++)
      for (let j = 0; j < dim; j++)
        for (let k = 0; k < dim; k++)
          this.cube[i][j][k].show();
  }

  turnX(cube, index, direction) {
    let updated_face = [[], [], []];
    for (let y = 0; y < dim; y++) {
      for (let z = 0; z < dim; z++) {

        var qb = this.cube[index+1][y][z];
        var matrix = Cube.updateCords(qb.y, qb.z, direction);
        var new_y = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_y+1][new_z+1] = qb;
        qb.update(Math.round(qb.x), new_y, new_z);
        qb.turnFacesX(direction * Math.PI / 2);
      }
    }
    Cube.updateX(cube, updated_face, index+1);
  }

  turnY(cube, index, direction) {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let z = 0; z < dim; z++) {

        var qb = this.cube[x][index+1][z];
        var matrix = Cube.updateCords(qb.x, qb.z, direction);
        var new_x = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_x+1][new_z+1] = qb;
        qb.update(new_x, Math.round(qb.y), new_z);
        qb.turnFacesY(direction * Math.PI / 2);
      }
    }
    Cube.updateY(cube, updated_face, index+1);
  }

  turnZ(cube, index, direction) {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let y = 0; y < dim; y++) {

        var qb = this.cube[x][y][index+1];
        var matrix = updateCords(qb.x, qb.y, direction);
        var new_x = Math.round(matrix[4]);
        var new_y = Math.round(matrix[5]);

        updated_face[new_x+1][new_y+1] = qb;
        qb.update(new_x, new_y, Math.round(qb.z));
        qb.turnFacesZ(direction * Math.PI / 2);
      }
    }
    updateZ(cube, updated_face, index+1);
  }

  static updateCords(x, y, direction) {
    var matrix = mat2d.create();
    mat2d.rotate(matrix, matrix, direction * Math.PI / 2);
    mat2d.translate(matrix, matrix, [x, y]);
    return matrix;
  }

  static updateX(cube, face, index) {
    for (var y = 0; y < dim; y++)
      for (var z = 0; z < dim; z++)
        this.cube[index][y][z] = face[y][z];
  }

  static updateY(cube, face, index) {
    for (var x = 0; x < dim; x++)
      for (var z = 0; z < dim; z++)
        this.cube[x][index][z] = face[x][z];
  }

  static updateZ(cube, face, index) {
    for (var x = 0; x < dim; x++)
      for (var y = 0; y < dim; y++)
        this.cube[x][y][index] = face[x][y];
  }
}
