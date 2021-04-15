export default class Face {
  constructor(p, normal, color) {
    this.p = p;
    this.normal = normal;
    this.color = color;
  }

  show() {
    this.p.push();
    this.p.fill(this.color);
    this.p.noStroke();
    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.normal.x / 2, this.normal.y / 2, this.normal.z / 2);

    if (Math.abs(this.normal.x) > 0)
      this.p.rotateY(Math.PI / 2);
    else if (Math.abs(this.normal.y) > 0)
      this.p.rotateX(Math.PI / 2);

    this.p.square(0, 0, 1);
    this.p.pop();
  }

  turnX(angle) {
    var vector = this.p.createVector();
    vector.y = Math.round(this.normal.y * Math.cos(angle) - this.normal.z * Math.sin(angle));
    vector.z = Math.round(this.normal.y * Math.sin(angle) + this.normal.z * Math.cos(angle));
    vector.x = Math.round(this.normal.x);
    this.normal = vector;
  }

  turnY(angle) {
    var vector = this.p.createVector();
    vector.x = Math.round(this.normal.x * Math.cos(angle) - this.normal.z * Math.sin(angle));
    vector.z = Math.round(this.normal.x * Math.sin(angle) + this.normal.z * Math.cos(angle));
    vector.y = Math.round(this.normal.y);
    this.normal = vector;
  }

  turnZ(angle) {
     var vector = this.p.createVector();
    vector.x = Math.round(this.normal.x * Math.cos(angle) - this.normal.y * Math.sin(angle));
    vector.y = Math.round(this.normal.x * Math.sin(angle) + this.normal.y * Math.cos(angle));
    vector.z = Math.round(this.normal.z);
    this.normal = vector;
  }
}
