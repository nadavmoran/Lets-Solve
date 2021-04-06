import { mat4 } from "./Modules/index.js";

export class Cubie {
  constructor(p5, matrix, x, y, z) {
    this.p5 = p5;
    this.matrix = matrix;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  highlight() {
    this.highlight = 1;
  }

  update(x, y, z) {
    mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, [x, y, z]);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  show() {
    this.p5.fill(255);
    if(this.highlight === 1)
      this.p5.fill(200, 0, 0);
    this.p5.stroke(0);
    this.p5.strokeWeight(3.141592);
    this.p5.push();
    this.p5.applyMatrix(this.matrix);
    this.p5.box(1);

    //box(this.len);
    this.p5.pop();
  }
}
