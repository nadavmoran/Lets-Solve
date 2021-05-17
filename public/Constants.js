// The number of pieces for each dimention
export const dim = 3;
// The animation speed
export const turnSpeed = Math.PI / (180 * 10);

/**
 * Turns the cube base on the key pressed
 * @param key {string} key the user pressed on
 * @param cube {array} cube to turn
 */
export function controls(key, cube) {
  // end the current animation
  if (cube.moving) cube.finishTurn();

  if (key == "r") {
    cube.turn("x", 1, 1);
  } else if (key == "R") {
    cube.turn("x", 1, -1);
  } else if (key == "m") {
    cube.turn("x", 0, -1);
  } else if (key == "M") {
    cube.turn("x", 0, 1);
  } else if (key == "l") {
    cube.turn("x", -1, -1);
  } else if (key == "L") {
    cube.turn("x", -1, 1);
  } else if (key == "u") {
    cube.turn("y", -1, 1);
  } else if (key == "U") {
    cube.turn("y", -1, -1);
  } else if (key == "e") {
    cube.turn("y", 0, -1);
  } else if (key == "E") {
    cube.turn("y", 0, 1);
  } else if (key == "d") {
    cube.turn("y", 1, -1);
  } else if (key == "D") {
    cube.turn("y", 1, 1);
  } else if (key == "f") {
    cube.turn("z", 1, 1);
  } else if (key == "F") {
    cube.turn("z", 1, -1);
  } else if (key == "s") {
    cube.turn("z", 0, -1);
  } else if (key == "S") {
    cube.turn("z", 0, 1);
  } else if (key == "b") {
    cube.turn("z", -1, -1);
  } else if (key == "B") {
    cube.turn("z", -1, 1);
  }
}
