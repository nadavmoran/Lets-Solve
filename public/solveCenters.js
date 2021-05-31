const centerOrder = ["U", "L", "F", "R", "B", "D"];
const sliceMoves = {
  M: ["F", "D", "U", "B"],
  "M'": ["B", "U", "D", "F"],
  M2: ["D", "B", "F", "U"],
  S: ["R", "U", "D", "L"],
  "S'": ["L", "D", "U", "R"],
  S2: ["D", "R", "L", "U"],
  E: ["F", "R", "B", "L"],
  "E'": ["B", "L", "F", "R"],
  E2: ["R", "B", "L", "F"]
};
const indexToMove = {0: "M2", 1: "S2", 2: "E2"};

/* function chooseMove(state) {
  var moveOptions = ['M','S','E'];

  for (var i = 0; i < state.length; i++) {
    for (var j = 0; j < moveOptions.length; j++) {
      if (!sliceMoves[moveOptions[j]].includes(state[i]))
        moveOptions.splice(j, 1);
    }
  }
  return moveOptions;
}*/

function getMoveFromState(state) {
  var move = [...state];

  for (var i = 0; i < state.length; i++) {
    if (state[i] == centerOrder[i]) {
      if (move.length == 5) move.splice(i - 1, 1);
      else move.splice(i, 1);
    }
  }
  if (move.length == 4) return getKeyByValue(sliceMoves, move);

  for (var i = 0; i < state.length; i++) {
    if (centerOrder.indexOf(state[i]) == state.indexOf(centerOrder[i]))
      return indexToMove[i];
  }

  return "M";
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => arraysEqual(object[key], value));
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(getMoveFromState(["D", "R", "F", "L", "B", "U"]));
