
class Circle {
  /**
   * Creates a Circle instance with the given radius.
   * @param {number} radius - The radius of the circle.
   */
  constructor(radius) {
    this.radius = radius;
  }

  /**
   * Calculates the perimeter of the circle.
   * @returns {number} The perimeter value.
   */
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Calculates the area of the circle.
   * @returns {number} The area value.
   */
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export default Circle;
