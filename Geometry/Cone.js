export default class Cone {
  constructor(baseRadius, height) {
    this.baseRadius = baseRadius;
    this.height = height;
  }

  calculateBaseArea() {
    return Math.pow(this.baseRadius, 2) * Math.PI;
  }

  calculateVolume() {
    return this.calculateBaseArea() * this.height / 3;
  }

  calculateSurfaceArea() {
    const slantHeight = Math.sqrt(Math.pow(this.baseRadius, 2) + Math.pow(this.height, 2));
    return this.calculateBaseArea() + Math.PI * this.baseRadius * slantHeight;
  }
}
