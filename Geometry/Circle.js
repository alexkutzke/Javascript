export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculatePerimeter() {
    return this.radius * 2 * Math.PI;
  }

  calculateArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
