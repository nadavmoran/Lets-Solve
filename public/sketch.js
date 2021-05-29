import Cube from "./cube.js";
import {controls, convertNotations} from "./constants.js";


const s = p => {
  const scrambleElement = document.getElementById("scramble");
  let scrambleIndex;
  let scramble;
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
    scrambleIndex = 0;
    var scram = "U F2 R2 U B2 L2 U' B2 U' L2 F2 L' U F' D' U R B' L2 D U2";
    scrambleElement.innerHTML = scram;//data.scramble;
    scrambleElement.value = scram.split(' ');//data.scramble;
    scramble = scrambleElement.value;
  };

  /**
   * Gets input from the user keyboard
   * @param p.key {string} key the key that the user pressed on
   */
  p.keyPressed = function() {
    controls(p.key, cube);
  };

  /**
   * Continuously draws the cube and the background.
   * Apply the moves of the scramble
   */
  p.draw = function() {
    p.background(51);
    p.scale(50);
    cube.show();
    if (scrambleElement.value != scramble) {
      scramble = scrambleElement.value;
      scrambleIndex = 0;
    }
    if (!cube.moving && scrambleIndex < scramble.length) {
      controls(convertNotations(scramble[scrambleIndex]), cube);
      scrambleIndex++;
    }
  };
};

let myp5 = new p5(s);
