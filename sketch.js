import Cube from "./Cube.js";
import { controls } from "./Constants.js";

const s = (p) => {

  let cam;
  let cube;
  let font;
  let solvedCube = new Cube(p);

  p.setup = function() {
    // Disable the context menu on the canvas so the camera can use the right mouse button
    p.createCanvas(600, 600, p.WEBGL).elt.oncontextmenu = () => false;
    cam = p.createEasyCam({
      distance: 400
    });
    cube = new Cube(p);
  }

  p.keyPressed = function() {
    controls(p.key, cube);
  }

  p.draw = function() {
    p.background(51);
    p.scale(50);
    cube.show();
  }
}

let myp5 = new p5(s);
