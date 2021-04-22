import * as mat4 from "./Modules/mat4.js";
import * as mat2d from "./Modules/mat2d.js";
import { updateCubeMatrix } from "./AxisesMethods.js";
import { dim, turnSpeed } from "./Constants.js";
import Cubie from "./Cubie.js";

export default class Cube {
  constructor(p) {
    this.cube = [];
    this.p = p;

    this.turnAngle = 0;
    this.turnDirection = 1;
    this.turnAxis = '';
    this.turnIndex = 0;
    this.moving = false;

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
        for (let k = 0; k < dim; k++) {
          var qb = this.cube[i][j][k];
          if (this.moving)
            this.turnAngle += turnSpeed * this.turnDirection;

          if(qb.cords[this.turnAxis] == this.turnIndex && this.moving)
             this.p.rotateX(this.turnAngle);
          qb.show();

          if(qb.cords[this.turnAxis] == this.turnIndex && this.moving)
            this.p.rotateX(this.turnAngle * -1);
          if(Math.abs(this.turnAngle) > Math.PI / 2) {
            this.moving = false;
            this.turnAngle = 0;
            this.updateX();
          }
        }
  }

  turnX(index, direction) {
    this.moving = true;
    this.turnIndex = index;
    this.turnAxis = 'x';
    this.turnDirection = direction;
  }

  updateX() {
    let updated_face = [[], [], []];
    for (let y = 0; y < dim; y++) {
      for (let z = 0; z < dim; z++) {

        var qb = this.cube[this.turnIndex+1][y][z];
        var matrix = Cube.updateCords(qb.cords['y'], qb.cords['z'], this.turnDirection);
        var new_y = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_y+1][new_z+1] = qb;
        qb.update(Math.round(qb.cords['x']), new_y, new_z);
        qb.turnFacesX(this.turnDirection * Math.PI / 2);
      }
    }
    updateCubeMatrix['x'](this.cube, updated_face, this.turnIndex+1);
  }

  turnY(index, direction) {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let z = 0; z < dim; z++) {

        var qb = this.cube[x][index+1][z];
        var matrix = Cube.updateCords(qb.cords['x'], qb.cords['z'], direction);
        var new_x = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_x+1][new_z+1] = qb;
        qb.update(new_x, Math.round(qb.cords['y']), new_z);
        qb.turnFacesY(direction * Math.PI / 2);
      }
    }
    updateCubeMatrix['y'](this.cube, updated_face, index+1);
  }

  turnZ(index, direction) {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let y = 0; y < dim; y++) {

        var qb = this.cube[x][y][index+1];
        var matrix = Cube.updateCords(qb.cords['x'], qb.cords['y'], direction);
        var new_x = Math.round(matrix[4]);
        var new_y = Math.round(matrix[5]);

        updated_face[new_x+1][new_y+1] = qb;
        qb.update(new_x, new_y, Math.round(qb.cords['z']));
        qb.turnFacesZ(direction * Math.PI / 2);
      }
    }
    updateCubeMatrix['z'](this.cube, updated_face, index+1);
  }

  static updateCords(x, y, direction) {
    var matrix = mat2d.create();
    mat2d.rotate(matrix, matrix, direction * Math.PI / 2);
    mat2d.translate(matrix, matrix, [x, y]);
    return matrix;
  }
}
