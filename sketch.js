//import { mat4 } from "./Modules/index.js";
import * as mat4 from "./Modules/mat4.js";
import { Cubie } from "./Cubie.js";
import { dim } from "./Constants.js";

const s = (p) => {

  let cam;

  const cube = [];

  p.setup = function() {
    // Disable the context menu on the canvas so the camera can use the right mouse button
    p.createCanvas(600, 600, p.WEBGL).elt.oncontextmenu = () => false;;

    cam = p.createEasyCam({
      distance: 400
    });

    for (let x = -1; x <= 1; x++) {
      cube[x+1] = [];
      for (let y = -1; y <= 1; y++) {
        cube[x+1][y+1] = []
        for (let z = -1; z <= 1; z++) {
          var matrix = mat4.create();
          mat4.translate(matrix, matrix, [x, y, z]);
          cube[x+1][y+1][z+1] = new Cubie(p, matrix);
        }
      }
    }
    cube[0][0][2].highlight();
    cube[0][0][0].highlight();
  }

  p.draw = function() {
    p.background(51);
    p.scale(50);
    for (var i = 0; i < dim; i++) {
      for (var j = 0; j < dim; j++) {
        for (var k = 0; k < dim; k++) {
          cube[i][j][k].show();
        }
      }
    }
  }
}

let myp5 = new p5(s);
