import { mat4 } from "./MathModules/index.js";
import Face from "./Face.js";

export default class Cubie {
  constructor(p, matrix, x, y, z) {
    this.p = p;
    this.matrix = matrix;
    this.cords = {x: x, y: y, z: z};

    this.faces = [];
    if (this.cords['z'] == -1)
      this.faces.push(new Face(this.p, this.p.createVector(0, 0, -1), this.p.color(0, 0, 255)));
    else if (this.cords['z'] == 1)
      this.faces.push(new Face(this.p, this.p.createVector(0, 0, 1), this.p.color(0, 255, 0)));
    if (this.cords['y'] == -1)
      this.faces.push(new Face(this.p, this.p.createVector(0, -1, 0), this.p.color(255, 255, 255)));
    else if (this.cords['y'] == 1)
      this.faces.push(new Face(this.p, this.p.createVector(0, 1, 0), this.p.color(255, 255, 0)));
    if (this.cords['x'] == -1)
      this.faces.push(new Face(this.p, this.p.createVector(-1, 0, 0), this.p.color(255, 150, 0)));
    else if (this.cords['x'] == 1)
      this.faces.push(new Face(this.p, this.p.createVector(1, 0, 0), this.p.color(255, 0, 0)));
  }

  update(x, y, z) {
    mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, [x, y, z]);
    this.cords['x'] = x;
    this.cords['y'] = y;
    this.cords['z'] = z;
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

  turnFacesX(angle, axis) {
    for (let face of this.faces) {
      face.turnX(angle);
    }
  }

  turnFacesY(angle, axis) {
    for (let face of this.faces) {
      face.turnY(angle);
    }
  }

  turnFacesZ(angle, axis) {
    for (let face of this.faces) {
      face.turnZ(angle);
    }
  }
}
