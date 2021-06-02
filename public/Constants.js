// The number of pieces for each dimention
export const dim = 3;
// The animation speed
export const turnSpeed = Math.PI / (180 * 5);
// Centers solved order
export const centerOrder = ["U", "L", "F", "R", "B", "D"];

export const scrambleElement = document.getElementById("scramble");
export const cubeElement = document.getElementById("cube");

export const numOfEdges = 12;
export const numOfCorners = 8;
export const numOfCenters = 6;

export const Edges = {
  UR: 0,
  UF: 1,
  UL: 2,
  UB: 3,
  DR: 4,
  DF: 5,
  DL: 6,
  DB: 7,
  FR: 8,
  FL: 9,
  BL: 10,
  BR: 11
};

export const Corners = {
  URF: 0,
  UFL: 1,
  ULB: 2,
  UBR: 3,
  DFR: 4,
  DLF: 5,
  DBL: 6,
  DBR: 7
};

export const Centers = {
  U: 0,
  L: 1,
  F: 2,
  R: 3,
  B: 4,
  D: 5
};

export const pieceOrder = [
  [
    ["ULB", "UL", "UFL"],
    ["BL", "L", "FL"],
    ["DBL", "DL", "DLF"]
  ],
  [
    ["UB", "U", "UF"],
    ["B", "C", "F"],
    ["DB", "D", "DF"]
  ],
  [
    ["UBR", "UR", "URF"],
    ["BR", "R", "FR"],
    ["DBR", "DR", "DFR"]
  ]
];
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

  var params;
  if (key == "r" || key == "R") {
    params = ["x", 1, direction];
  } else if (key == "m" || key == "M") {
    params = ["x", 0, direction];
  } else if (key == "l" || key == "L") {
    params = ["x", -1, direction];
  } else if (key == "u" || key == "U") {
    params = ["y", -1, direction];
  } else if (key == "e" || key == "E") {
    params = ["y", 0, direction];
  } else if (key == "d" || key == "D") {
    params = ["y", 1, direction];
  } else if (key == "f" || key == "F") {
    params = ["z", 1, direction];
  } else if (key == "s" || key == "S") {
    params = ["z", 0, direction];
  } else if (key == "b" || key == "B") {
    params = ["z", -1, direction];
  }
  return params;
}

export function convertNotations(notation) {
  if (notation[1] == 2) return notation;
  else if (notation[1]) return notation[0];
  return notation.toLowerCase();
}
