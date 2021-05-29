// The number of pieces for each dimention
export const dim = 3;
// The animation speed
export const turnSpeed = Math.PI / (180 * 5);

/**
 * Turns the cube base on the key pressed
 * @param key {string} key the user pressed on
 * @param cube {array} cube to turn
 */
export function controls(key, cube) {
  // end the current animation
  if (cube.moving) cube.finishTurn();

  // change direction base on move type
  var direction = 1;
  if (key[1] == 2) {
    direction = 2;
    key = key[0];
  } else if (key == key.toLowerCase()) direction = -1;

  // if the move is U, R, S, F reverse the direction
  if (["r", "u", "s", "f"].includes(key.toLowerCase())) direction *= -1;

  if (key == "r") {
    cube.turn("x", 1, direction);
  } else if (key == "R") {
    cube.turn("x", 1, direction);
  } else if (key == "m") {
    cube.turn("x", 0, direction);
  } else if (key == "M") {
    cube.turn("x", 0, direction);
  } else if (key == "l") {
    cube.turn("x", -1, direction);
  } else if (key == "L") {
    cube.turn("x", -1, direction);
  } else if (key == "u") {
    cube.turn("y", -1, direction);
  } else if (key == "U") {
    cube.turn("y", -1, direction);
  } else if (key == "e") {
    cube.turn("y", 0, direction);
  } else if (key == "E") {
    cube.turn("y", 0, direction);
  } else if (key == "d") {
    cube.turn("y", 1, direction);
  } else if (key == "D") {
    cube.turn("y", 1, direction);
  } else if (key == "f") {
    cube.turn("z", 1, direction);
  } else if (key == "F") {
    cube.turn("z", 1, direction);
  } else if (key == "s") {
    cube.turn("z", 0, direction);
  } else if (key == "S") {
    cube.turn("z", 0, direction);
  } else if (key == "b") {
    cube.turn("z", -1, direction);
  } else if (key == "B") {
    cube.turn("z", -1, direction);
  }
}

export function convertNotations(notation) {
  if (notation[1] == 2) return notation;
  else if (notation[1]) return notation[0];
  return notation.toLowerCase();
}
