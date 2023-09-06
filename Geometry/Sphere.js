export default class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  calculateVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }

  calculateSurfaceArea() {
    return 4 * Math.PI * Math.pow(this.radius, 2);
  }
}
