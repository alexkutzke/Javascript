export default class Pyramid {
  constructor(bsl, height) {
    this.bsl = bsl;
    this.height = height;
  }

  calculateBaseArea() {
    return Math.pow(this.bsl, 2);
  }

  calculateVolume() {
    return this.calculateBaseArea() * this.height / 3;
  }

  calculateSurfaceArea() {
    const slantHeight = Math.sqrt(Math.pow(this.bsl / 2, 2) + Math.pow(this.height, 2));
    return this.calculateBaseArea() + this.bsl * 2 * slantHeight;
  }
}