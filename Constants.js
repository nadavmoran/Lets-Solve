export const dim = 3;
export const turnSpeed = Math.PI / (180 * 20);

export function controls(key, cube) {
  if (key == 'r') {
    cube.turnX(1, 1);
  }
  else if (key == 'R') {
    cube.turnX(1, -1);
  }
  else if (key == 'm') {
    cube.turnX(0, -1);
  }
  else if (key == 'M') {
    cube.turnX(0, 1);
  }
  else if (key == 'l') {
    cube.turnX(-1, -1);
  }
  else if (key == 'L') {
    cube.turnX(-1, 1);
  }
  else if (key == 'u') {
    cube.turnY(-1, 1);
  }
  else if (key == 'U') {
    cube.turnY(-1, -1);
  }
  else if (key == 'e') {
    cube.turnY(0, -1);
  }
  else if (key == 'E') {
    cube.turnY(0, 1);
  }
  else if (key == 'd') {
    cube.turnY(1, -1);
  }
  else if (key == 'D') {
    cube.turnY(1, 1);
  }
  else if (key == 'f') {
    cube.turnZ(1, 1);
  }
  else if (key == 'F') {
    cube.turnZ(1, -1);
  }
  else if (key == 's') {
    cube.turnZ(0, -1);
  }
  else if (key == 'S') {
    cube.turnZ(0, 1);
  }
  else if (key == 'b') {
    cube.turnZ(-1, -1);
  }
  else if (key == 'B') {
    cube.turnZ(-1, 1);
  }
}
