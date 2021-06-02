import {numOfEdges, Edges, numOfCorners, Corners, pieceOrder} from "./Constants.js";
import {resetArray} from "./tools.js";

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
    move = move.toLowerCase();
    this.updateEdges(move, cube);
    this.updateCorners(move, cube);
  }

  getOrientation(cube) {
    var edgesOrientation = resetArray(numOfEdges);
    var cornersOrientation = resetArray(numOfCorners);

    for (var i = 0; i < cube.length; i++) {
      for (var j = 0; j < cube.length; j++) {
        for (var k = 0; k < cube.length; k++) {
          var pieceName = cube[i][j][k].name;
          var solvedPiece = pieceOrder[i][j][k];
          if (pieceName.length == 3)
            cornersOrientation[Corners[solvedPiece]] = this.corners[pieceName];
          else if (pieceName.length == 2)
            edgesOrientation[Edges[solvedPiece]] = this.edges[pieceName];
        }
      }
    }
    return {edges: edgesOrientation, corners: cornersOrientation};
  }

  updateCorners(move, cube) {
    if (move == 'r') {
      this.twistCorner(cube[2][0][0].name, 1);
      this.twistCorner(cube[2][0][2].name, 2);
      this.twistCorner(cube[2][2][0].name, 2);
      this.twistCorner(cube[2][2][2].name, 1);
    } else if (move == 'l') {
      this.twistCorner(cube[0][0][0].name, 2);
      this.twistCorner(cube[0][0][2].name, 1);
      this.twistCorner(cube[0][2][0].name, 1);
      this.twistCorner(cube[0][2][2].name, 2);
    } else if (move == 'f') {
      this.twistCorner(cube[2][0][2].name, 1);
      this.twistCorner(cube[0][0][2].name, 2);
      this.twistCorner(cube[2][2][2].name, 2);
      this.twistCorner(cube[0][2][2].name, 1);
    } else if (move == 'b') {
      this.twistCorner(cube[2][0][0].name, 2);
      this.twistCorner(cube[0][0][0].name, 1);
      this.twistCorner(cube[2][2][0].name, 1);
      this.twistCorner(cube[0][2][0].name, 2);
    }
  }

  updateEdges(move, cube) {
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

  twistCorner(name, degree) {
    this.corners[name] += degree;
    if (this.corners[name] > 2) this.corners[name] -= 3;
  }
}
