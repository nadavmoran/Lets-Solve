export class Cubie {
  constructor(p5, matrix) {
    this.p5 = p5;
    this.pos = matrix;
  }

  highlight() {
    this.highlight = 1;
  }

  show() {
    this.p5.fill(255);
    if(this.highlight === 1) {
      this.p5.fill(200, 0, 0);
    }
    this.p5.stroke(0);
    this.p5.strokeWeight(3.141592);
    this.p5.push();
    this.p5.applyMatrix(this.pos);
    this.p5.box(1);

    //box(this.len);
    this.p5.pop();
  }
}
