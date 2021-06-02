import {Edges, Corners} from "./Constants.js";

export default class CubeOrientation {
  constructor() {
    this.edges = {
      UR: 0,
      UF: 0,
      UL: 0,
      UB: 0,
      DR: 0,
      DF: 0,
      DL: 0,
      DB: 0,
      FR: 0,
      FL: 0,
      BL: 0,
      BR: 0
    };

    this.corners = {
      URF: 0,
      UFL: 0,
      ULB: 0,
      UBR: 0,
      DFR: 0,
      DLF: 0,
      DBL: 0,
      DBR: 0
    };
  }

  update(move, cube) {
    updateEdges(move, cube);

  }

  updateEdges(move, cube) {
    move = move.toLowerCase();
    var index = {f: 2, s: 1, b: 0}[move];

    if (["f", "b", "s"].includes(move)) {
      for (var x = 0; x < cube.length; x++) {
        for (var y = 0; y < cube.length; y++) {
          var pieceName = cube[x][y][index].name;
          if (pieceName.length == 2) this.flipEdge(pieceName);
        }
      }
    } else if (move == "m") {
      index = 1;
      this.flipEdge(cube[index][0][0].name);
      this.flipEdge(cube[index][0][2].name);
      this.flipEdge(cube[index][2][0].name);
      this.flipEdge(cube[index][2][2].name);
    } else if (move == "e") {
      index = 1;
      this.flipEdge(cube[0][index][0].name);
      this.flipEdge(cube[0][index][2].name);
      this.flipEdge(cube[2][index][0].name);
      this.flipEdge(cube[2][index][2].name);
    }
  }

  flipEdge(name) {
    this.edges[name] += 1;
    if (this.edges[name] == 2) this.edges[name] = 0;
  }
}
