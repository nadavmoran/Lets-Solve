import {mat4} from "./MathModules/index.js";
import Face from "./face.js";

/**
 * The class represents each cubie of the cube
 * @param faces {face} array of faces for drawing the cubie colors
 */
export default class Cubie {
  /**
   * Sets some variables and builds the faces array
   *  base on the piece position and type
   * @param p p5.js instatnce
   * @param matrix {array} 3 dimentional matrix to represent the cubie
   * @param x {number} position of the cubie
   * @param y {number} position of the cubie   * @param z {number} position of the cubie
   */
  constructor(p, matrix, type, x, y, z) {
    this.p = p;
    this.matrix = matrix;
    this.name = name;
    this.cords = {x: x, y: y, z: z};
    this.faces = [];

    // Add the faces base on the cubie position and type
    if (z == -1) {
      this.faces.push(
        new Face(this.p, this.p.createVector(0, 0, -1), this.p.color('blue'))
      );
    } else if (z == 1) {
      this.faces.push(
        new Face(this.p, this.p.createVector(0, 0, 1), this.p.color(0, 255, 0))
      );
    }
    if (y == -1) {
      this.faces.push(
        new Face(
          this.p,
          this.p.createVector(0, -1, 0),
          this.p.color('white'))
      );
    } else if (y == 1) {
      this.faces.push(
        new Face(
          this.p,
          this.p.createVector(0, 1, 0),
          this.p.color('yellow'))
      );
    }
    if (x == -1) {
      this.faces.push(
        new Face(
          this.p,
          this.p.createVector(-1, 0, 0),
          this.p.color('orange'))
      );
    } else if (x == 1) {
      this.faces.push(
        new Face(this.p, this.p.createVector(1, 0, 0), this.p.color('red'))
      );
    }
  }

  /**
   * Updates the position of the cubie
   * @param x {number} position updates position of the cubie
   * @param y {number} position updates position of the cubie
   * @param z {number} position updates position of the cubie
   */
  update(x, y, z) {
    mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, [x, y, z]);
    this.cords["x"] = x;
    this.cords["y"] = y;
    this.cords["z"] = z;
  }

  /**
   * Draws the cubie
   */
  show() {
    // Sets some parameters before drawing
    this.p.noFill();
    this.p.stroke(0);
    this.p.strokeWeight(3);
    this.p.push();
    this.p.applyMatrix(this.matrix);
    // Draws a box
    this.p.box(1);

    // Draws the faces of the cubie
    for (let face of this.faces) {
      face.show();
    }
    this.p.pop();
  }

  /**
   * Turns all the cubie faces in the x axis
   * @param angle {number} angle to rotate the face
   */
  turnFacesX(angle) {
    for (let face of this.faces) {
      face.turnX(angle);
    }
  }

  /**
   * Turns all the cubie faces in the x axis
   * @param angle {number} angle to rotate the face
   */
  turnFacesY(angle) {
    for (let face of this.faces) {
      face.turnY(angle);
    }
  }

  /**
   * Turns all the cubie faces in the x axis
   * @param angle {number} angle to rotate the face
   */
  turnFacesZ(angle) {
    for (let face of this.faces) {
      face.turnZ(angle);
    }
  }
}
