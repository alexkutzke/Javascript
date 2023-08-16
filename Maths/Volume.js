const validatePositiveNumber = (value, name) => {
  if (typeof value !== 'number') {
    throw new TypeError(`The ${name} should be of type Number`);
  } else if (value < 0 || (!Number.isFinite(value))) {
    throw new Error(`The ${name} only accepts positive values`);
  }
};

const VolumeCalculators = {
  cuboid: (width, length, height) => {
    [width, length, height].forEach((value, i) => validatePositiveNumber(value, ['Width', 'Length', 'Height'][i]));
    return width * length * height;
  },
  cube: (length) => {
    validatePositiveNumber(length, 'Length');
    return length ** 3;
  },
  cone: (radius, height) => {
    validatePositiveNumber(radius, 'Radius');
    validatePositiveNumber(height, 'Height');
    return Math.PI * radius ** 2 * height / 3.0;
  },
  pyramid: (baseLength, baseWidth, height) => {
    validatePositiveNumber(baseLength, 'BaseLength');
    validatePositiveNumber(baseWidth, 'BaseWidth');
    validatePositiveNumber(height, 'Height');
    return (baseLength * baseWidth * height) / 3.0;
  },
  cylinder: (radius, height) => {
    validatePositiveNumber(radius, 'Radius');
    validatePositiveNumber(height, 'Height');
    return Math.PI * radius ** 2 * height;
  },
  triangularPrism: (baseLengthTriangle, heightTriangle, height) => {
    validatePositiveNumber(baseLengthTriangle, 'BaseLengthTriangle');
    validatePositiveNumber(heightTriangle, 'HeightTriangle');
    validatePositiveNumber(height, 'Height');
    return 0.5 * baseLengthTriangle * heightTriangle * height;
  },
  pentagonalPrism: (pentagonalLength, pentagonalBaseLength, height) => {
    validatePositiveNumber(pentagonalLength, 'PentagonalLength');
    validatePositiveNumber(pentagonalBaseLength, 'PentagonalBaseLength');
    validatePositiveNumber(height, 'Height');
    return (5 / 2 * pentagonalLength * pentagonalBaseLength * height);
  },
  sphere: (radius) => {
    validatePositiveNumber(radius, 'Radius');
    return (4 / 3 * Math.PI * radius ** 3);
  },
  hemisphere: (radius) => {
    validatePositiveNumber(radius, 'Radius');
    return (2 * Math.PI * radius ** 3) / 3;
  }
};

export { VolumeCalculators };
