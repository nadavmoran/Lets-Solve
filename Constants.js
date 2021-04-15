export const dim = 3;

export function controls(key, cube) {
  if (key == 'r') {
    cube.turnX(cube, 1, 1);
  }
  else if (key == 'R') {
    cube.turnX(cube, 1, -1);
  }
  else if (key == 'm') {
    cube.turnX(cube, 0, -1);
  }
  else if (key == 'M') {
    cube.turnX(cube, 0, 1);
  }
  else if (key == 'l') {
    cube.turnX(cube, -1, -1);
  }
  else if (key == 'L') {
    cube.turnX(cube, -1, 1);
  }
  else if (key == 'u') {
    cube.turnY(cube, -1, 1);
  }
  else if (key == 'U') {
    cube.turnY(cube, -1, -1);
  }
  else if (key == 'e') {
    cube.turnY(cube, 0, -1);
  }
  else if (key == 'E') {
    cube.turnY(cube, 0, 1);
  }
  else if (key == 'd') {
    cube.turnY(cube, 1, -1);
  }
  else if (key == 'D') {
    cube.turnY(cube, 1, 1);
  }
  else if (key == 'f') {
    cube.turnZ(cube, 1, 1);
  }
  else if (key == 'F') {
    cube.turnZ(cube, 1, -1);
  }
  else if (key == 's') {
    cube.turnZ(cube, 0, -1);
  }
  else if (key == 'S') {
    cube.turnZ(cube, 0, 1);
  }
  else if (key == 'b') {
    cube.turnZ(cube, -1, -1);
  }
  else if (key == 'B') {
    cube.turnZ(cube, -1, 1);
  }
}
