import { mat4 } from "./Modules/index.js";
import Face from "./Face.js";

export default class Cubie {
  constructor(p, matrix, x, y, z) {
    this.p = p;
    this.matrix = matrix;
    this.x = x;
    this.y = y;
    this.z = z;

    this.faces = [];
    this.faces[0] = new Face(this.p, this.p.createVector(0, 0, 1), this.p.color(0, 255, 0));
    this.faces[1] = new Face(this.p, this.p.createVector(0, 0, -1), this.p.color(0, 0, 255));
    this.faces[2] = new Face(this.p, this.p.createVector(0, -1, 0), this.p.color(255, 255, 255));
    this.faces[3] = new Face(this.p, this.p.createVector(0, 1, 0), this.p.color(255, 255, 0));
    this.faces[4] = new Face(this.p, this.p.createVector(-1, 0, 0), this.p.color(255, 150, 0));
    this.faces[5] = new Face(this.p, this.p.createVector(1, 0, 0), this.p.color(255, 0, 0));
  }

  update(x, y, z) {
    mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, [x, y, z]);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  show() {
    this.p.noFill();
    this.p.stroke(0);
    this.p.strokeWeight(3);
    this.p.push();
    this.p.applyMatrix(this.matrix);
    this.p.box(1);
    for (let face of this.faces) {
      face.show();
    }
    this.p.pop();
  }

  turnFacesX(angle) {
    for (let face of this.faces) {
      face.turnX(angle);
    }
  }

  turnFacesY(angle) {
    for (let face of this.faces) {
      face.turnY(angle);
    }
  }

  turnFacesZ(angle) {
    for (let face of this.faces) {
      face.turnZ(angle);
    }
  }
}
