import * as mat4 from "./MathModules/mat4.js";
import * as mat2d from "./MathModules/mat2d.js";
import {updateCubeFace} from "./update_faces.js";
import {dim, turnSpeed} from "./constants.js";
import Cubie from "./cubie.js";

/**
 * The actual Rubik's Cube
 * @param cube {cubie} array of cubies
 * @param turnAngle the angle of the current animation
 * @param turnAxis the axis of the current animation
 * @param turnIndex the index of the current animation
 * @param moving is in the middle of an animation
 */
export default class Cube {
  /**
   * Initialize variables
   * @param p p5.js instance
   */
  constructor(p) {
    this.cube = [];
    this.p = p;

    // Animation parameters
    this.turnAngle = 0;
    this.turnDirection = 1;
    this.turnAxis = "";
    this.turnIndex = 0;
    this.moving = false;

    // Builds the cucies array
    for (let x = -1; x < dim - 1; x++) {
      this.cube[x + 1] = [];
      for (let y = -1; y < dim - 1; y++) {
        this.cube[x + 1][y + 1] = [];
        for (let z = -1; z < dim - 1; z++) {
          var matrix = mat4.create();
          mat4.translate(matrix, matrix, [x, y, z]);
          this.cube[x + 1][y + 1][z + 1] = new Cubie(p, matrix, x, y, z);
        }
      }
    }
  }

  /**
   * Draws the cube and the animations
   */
  show() {
    for (let i = 0; i < dim; i++)
      for (let j = 0; j < dim; j++)
        for (let k = 0; k < dim; k++) {
          var qb = this.cube[i][j][k];
          // increases the angle if the cube is moving
          if (this.moving) this.turnAngle += turnSpeed * this.turnDirection;

          // Rotates the moving face
          if (qb.cords[this.turnAxis] == this.turnIndex && this.moving)
            this.rotate(this.turnAngle);

          // Draws the cubie
          qb.show();

          // Rotates back for drawing the other faces
          if (qb.cords[this.turnAxis] == this.turnIndex && this.moving)
            this.rotate(this.turnAngle * -1);

          // Finishes the turn if the angle is greater than 90 degrees
          if (Math.abs(this.turnAngle) >= Math.PI / 2) {
            this.finishTurn();
          }
        }
  }

  /**
   * Starts the turn animation
   * @param axis the axis to turn the cube
   */
  turn(axis, index, direction) {
    this.moving = true;
    this.turnIndex = index;
    this.turnAxis = axis;
    this.turnDirection = direction;
  }

  /**
   * Finishes the turn and updates the cube
   */
  finishTurn() {
    this.moving = false;
    this.turnAngle = 0;
    this.update();
  }

  /**
  * Rotates the space by the given angle
  * @param angle the angle to rotate the space by
  */
  rotate(angle) {
    if (this.turnAxis == "x") this.p.rotateX(angle);
    else if (this.turnAxis == "y") this.p.rotateY(angle * -1);
    else if (this.turnAxis == "z") this.p.rotateZ(angle);
  }

  /**
  * Updates the cube by the turn axis
  */
  update() {
    if (this.turnAxis == "x") this.updateX();
    else if (this.turnAxis == "y") this.updateY();
    else if (this.turnAxis == "z") this.updateZ();
  }

  /**
  * Turns the x axis face
  */
  updateX() {
    let updated_face = [[], [], []];
    for (let y = 0; y < dim; y++) {
      for (let z = 0; z < dim; z++) {
        var qb = this.cube[this.turnIndex + 1][y][z];

        // Gets the new cordinates
        var matrix = Cube.updateCords(y - 1, z - 1, this.turnDirection);
        var new_y = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_y + 1][new_z + 1] = qb;
        // Updates the cubie position
        qb.update(this.turnIndex, new_y, new_z);
        //Turns the cubie faces
        qb.turnFacesX((this.turnDirection * Math.PI) / 2);
      }
    }
    // Updates the cube array
    updateCubeFace["x"](this.cube, updated_face, this.turnIndex + 1);
  }

  /**
  * Turns the y axis face
  */
  updateY() {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let z = 0; z < dim; z++) {
        var qb = this.cube[x][this.turnIndex + 1][z];

        // Gets the new cordinates
        var matrix = Cube.updateCords(x - 1, z - 1, this.turnDirection);
        var new_x = Math.round(matrix[4]);
        var new_z = Math.round(matrix[5]);

        updated_face[new_x + 1][new_z + 1] = qb;
        // Updates the cubie position
        qb.update(new_x, this.turnIndex, new_z);
        //Turns the cubie faces
        qb.turnFacesY((this.turnDirection * Math.PI) / 2);
      }
    }
    // Updates the cube array
    updateCubeFace["y"](this.cube, updated_face, this.turnIndex + 1);
  }

  /**
  * Turns the z axis face
  */
  updateZ() {
    let updated_face = [[], [], []];
    for (let x = 0; x < dim; x++) {
      for (let y = 0; y < dim; y++) {
        var qb = this.cube[x][y][this.turnIndex + 1];

        // Gets the new cordinates
        var matrix = Cube.updateCords(x - 1, y - 1, this.turnDirection);
        var new_x = Math.round(matrix[4]);
        var new_y = Math.round(matrix[5]);

        updated_face[new_x + 1][new_y + 1] = qb;
        // Updates the cubie position
        qb.update(new_x, new_y, this.turnIndex);
        //Turns the cubie faces
        qb.turnFacesZ((this.turnDirection * Math.PI) / 2);
      }
    }
    // Updates the cube array
    updateCubeFace["z"](this.cube, updated_face, this.turnIndex + 1);
  }

  /**
   * Rotates the face by multiply the cubie matrix by a 90 degrees rotation matrix
   * @param x the first cordinats
   * @param y the second cordinate
   * @param direction the direction of the rotation
   */
  static updateCords(x, y, direction) {
    var matrix = mat2d.create();
    mat2d.rotate(matrix, matrix, (direction * Math.PI) / 2);
    mat2d.translate(matrix, matrix, [x, y]);
    return matrix;
  }
}
