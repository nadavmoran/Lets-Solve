/**
 * The class represents the colors of each Cubie
 */
export default class Face {
  /**
   * Sets the parameters
   * @param p p5 instance
   * @param normal {array} vector a 3d vector for displaying the color in 3d space
   * @param color {color} color a p5 color for drawing the face
   */
  constructor(p, normal, color) {
    this.p = p;
    this.normal = normal;
    this.color = color;
  }

  /**
   * Draws the faces
   */
  show() {
    // Sets some parameter before drawing
    this.p.push();
    this.p.fill(this.color);
    this.p.noStroke();
    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.normal.x / 2, this.normal.y / 2, this.normal.z / 2);

    // If the abs x value or the abs y values is
    // greater then 0 the face needs to be rotated
    if (Math.abs(this.normal.x) > 0) this.p.rotateY(Math.PI / 2);
    else if (Math.abs(this.normal.y) > 0) this.p.rotateX(Math.PI / 2);

    // Draws a square
    this.p.square(0, 0, 1);
    this.p.pop();
  }

  /**
  * Turns the face vector in the x axis
  * @param angle {number} angle The angle to rotate the face
  */
  turnX(angle) {
    var vector = this.p.createVector();
    vector.y = Math.round(
      this.normal.y * Math.cos(angle) - this.normal.z * Math.sin(angle)
    );
    vector.z = Math.round(
      this.normal.y * Math.sin(angle) + this.normal.z * Math.cos(angle)
    );
    vector.x = Math.round(this.normal.x);
    this.normal = vector;
  }

  /**
  * Turns the face vector in the y axis
  * @param angle {number} angle The angle to rotate the face
  */
  turnY(angle) {
    var vector = this.p.createVector();
    vector.x = Math.round(
      this.normal.x * Math.cos(angle) - this.normal.z * Math.sin(angle)
    );
    vector.z = Math.round(
      this.normal.x * Math.sin(angle) + this.normal.z * Math.cos(angle)
    );
    vector.y = Math.round(this.normal.y);
    this.normal = vector;
  }

  /**
  * Turns the face vector in the z axis
  * @param angle {number} angle The angle to rotate the face
  */
  turnZ(angle) {
    var vector = this.p.createVector();
    vector.x = Math.round(
      this.normal.x * Math.cos(angle) - this.normal.y * Math.sin(angle)
    );
    vector.y = Math.round(
      this.normal.x * Math.sin(angle) + this.normal.y * Math.cos(angle)
    );
    vector.z = Math.round(this.normal.z);
    this.normal = vector;
  }
}
