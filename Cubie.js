import { colors, BCK, FRT, DWN, UPP, LFT, RGT} from "./Constants.js";

export class Cubie {
  constructor(p5, x, y, z, len_) {
    this.p5 = p5;
    this.pos = this.p5.createVector(x, y, z);
    this.len = len_;
  }
  show() {
    this.p5.fill(255);
    this.p5.stroke(0);
    this.p5.strokeWeight(8);
    this.p5.push();
    this.p5.translate(this.pos.x, this.pos.y, this.pos.z);
    this.p5.beginShape(this.p5.QUADS);
    const r = this.len / 2;

    // When this was ported, p5.js (version 1.0.0) had not yet
    // implemented support for beginShape(QUADS) in WEBGL mode.
    // See: https://github.com/processing/p5.js/issues/4401
    // So instead, we use separate shapes for each face of the cubie.

    // z-fixed
    this.p5.beginShape();
    this.p5.fill(colors[BCK]);
    this.p5.vertex(-r, -r, -r);
    this.p5.vertex(r, -r, -r);
    this.p5.vertex(r, r, -r);
    this.p5.vertex(-r, r, -r);
    this.p5.endShape(this.p5.CLOSE);

    this.p5.beginShape();
    this.p5.fill(colors[FRT]);
    this.p5.vertex(-r, -r, r);
    this.p5.vertex(r, -r, r);
    this.p5.vertex(r, r, r);
    this.p5.vertex(-r, r, r);
    this.p5.endShape(this.p5.CLOSE);

    // y-fixed
    this.p5.beginShape();
    this.p5.fill(colors[DWN]);
    this.p5.vertex(-r, -r, -r);
    this.p5.vertex(r, -r, -r);
    this.p5.vertex(r, -r, r);
    this.p5.vertex(-r, -r, r);
    this.p5.endShape(this.p5.CLOSE);

    this.p5.beginShape();
    this.p5.fill(colors[UPP]);
    this.p5.vertex(-r, r, -r);
    this.p5.vertex(r, r, -r);
    this.p5.vertex(r, r, r);
    this.p5.vertex(-r, r, r);
    this.p5.endShape(this.p5.CLOSE);

    // x-fixed
    this.p5.beginShape();
    this.p5.fill(colors[LFT]);
    this.p5.vertex(-r, -r, -r);
    this.p5.vertex(-r, r, -r);
    this.p5.vertex(-r, r, r);
    this.p5.vertex(-r, -r, r);
    this.p5.endShape(this.p5.CLOSE);

    this.p5.beginShape();
    this.p5.fill(colors[RGT]);
    this.p5.vertex(r, -r, -r);
    this.p5.vertex(r, r, -r);
    this.p5.vertex(r, r, r);
    this.p5.vertex(r, -r, r);
    this.p5.endShape(this.p5.CLOSE);

    //box(this.len);
    this.p5.pop();
  }
}
