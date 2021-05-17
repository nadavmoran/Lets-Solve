import Cube from "./Cube.js";
import {controls} from "./Constants.js";

const s = p => {
  let cam;
  let cube;

  /**
   * Setup some variables before drawing the cube
   */
  p.setup = function() {
    // Disable the context menu on the canvas so the camera can use the right mouse button
    p.createCanvas(600, 600, p.WEBGL).elt.oncontextmenu = () => false;

    // The camera to view the cube with
    cam = p.createEasyCam({
      distance: 400
    });
    cube = new Cube(p);
  };

  /**
   * Gets input from the user keyboard
   * @param p.key {string} key the key that the user pressed on
   */
  p.keyPressed = function() {
    controls(p.key, cube);
  };

  /**
   * Continuously draws the cube and the background
   */
  p.draw = function() {
    p.background(51);
    p.scale(50);
    cube.show();
  };
};

let myp5 = new p5(s);
