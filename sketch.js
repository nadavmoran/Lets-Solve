import * as glMatrix from "./Modules/index.js";
import * as easyCam from "./Modules/p5.easycam.min.js";
import { Cubie } from "./Cubie.js";
import { dim } from "./Constants.js";

const s = (p) => {

  let cam;

  const cube = [];

  p.setup = function() {
    // Disable the context menu on the canvas so the camera can use the right mouse button
    p.createCanvas(600, 600, p.WEBGL);

    /*cam = createEasyCam({
      distance: 400
    });*/

    let index = 0;
    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        for (let k = 0; k < dim; k++) {
          const len = 50;
          const offset = (dim - 1) * len * 0.5;
          const x = len * i - offset;
          const y = len * j - offset;
          const z = len * k - offset;
          cube[index] = new Cubie(p, x, y, z, len);
          index += 1;
        }
      }
    }
  }

  p.draw = function() {
    p.background(51);
    for (let i = 0; i < dim * dim * dim; i++) {
      cube[i].show();
    }
  }
}

let myp5 = new p5(s);
