/*

Alterações: 
      Adicionei comentários para cada linha do código;
      Alterei as nomeclaturas para deixa-las de fácil entendimento;
      
Alterado por: Aruake N. Mourão

Volume for Cuboid
Volume for Cube
Volume for Cone
Volume for Pyramid
Volume for Cylinder
Volume for Triangular Prism
Volume for Pentagonal Prism
Volume for Sphere
Volume for Hemisphere
*/

// Função para calcular o volume de um paralelepípedo
const calculateCuboidVolume = (width, length, height) => {
  // Verifica se as dimensões são números válidos
  validateNumber(width, 'Width');
  validateNumber(length, 'Length');
  validateNumber(height, 'Height');
  
  // Calcula o volume do cuboide (largura * comprimento * altura)
  const volume = width * length * height;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um cubo
const calculateCubeVolume = (length) => {
  // Verifica se o comprimento é um número válido
  validateNumber(length, 'Length');
  
  // Calcula o volume do cubo (comprimento elevado ao cubo)
  const volume = length ** 3;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um cone
const calculateConeVolume = (radius, height) => {
  // Verifica se o raio e a altura são números válidos
  validateNumber(radius, 'Radius');
  validateNumber(height, 'Height');
  
  // Calcula o volume do cone (π * raio elevado ao quadrado * altura / 3.0)
  const volume = (Math.PI * radius ** 2 * height) / 3.0;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de uma pirâmide
const calculatePyramidVolume = (baseLength, baseWidth, height) => {
  // Verifica se os comprimentos da base e a altura são números válidos
  validateNumber(baseLength, 'BaseLength');
  validateNumber(baseWidth, 'BaseWidth');
  validateNumber(height, 'Height');
  
  // Calcula o volume da pirâmide (baseLength * baseWidth * altura / 3.0)
  const volume = (baseLength * baseWidth * height) / 3.0;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um cilindro
const calculateCylinderVolume = (radius, height) => {
  // Verifica se o raio e a altura são números válidos
  validateNumber(radius, 'Radius');
  validateNumber(height, 'Height');
  
  // Calcula o volume do cilindro (π * raio elevado ao quadrado * altura)
  const volume = Math.PI * radius ** 2 * height;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um prisma triangular
const calculateTriangularPrismVolume = (baseLengthTriangle, heightTriangle, height) => {
  // Verifica se os comprimentos da base do triângulo e a altura são números válidos
  validateNumber(baseLengthTriangle, 'BaseLengthTriangle');
  validateNumber(heightTriangle, 'HeightTriangle');
  validateNumber(height, 'Height');
  
  // Calcula o volume do prisma triangular (1/2 * base do triângulo * altura do triângulo * altura)
  const volume = (1 / 2) * baseLengthTriangle * heightTriangle * height;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um prisma pentagonal
const calculatePentagonalPrismVolume = (pentagonalLength, pentagonalBaseLength, height) => {
  // Verifica se os comprimentos da aresta pentagonal e da base pentagonal, e a altura são números válidos
  validateNumber(pentagonalLength, 'PentagonalLength');
  validateNumber(pentagonalBaseLength, 'PentagonalBaseLength');
  validateNumber(height, 'Height');
  
  // Calcula o volume do prisma pentagonal (5/2 * comprimento da aresta pentagonal * comprimento da base pentagonal * altura)
  const volume = (5 / 2) * pentagonalLength * pentagonalBaseLength * height;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de uma esfera
const calculateSphereVolume = (radius) => {
  // Verifica se o raio é um número válido
  validateNumber(radius, 'Radius');
  
  // Calcula o volume da esfera (4/3 * π * raio elevado ao cubo)
  const volume = (4 / 3) * Math.PI * radius ** 3;
  
  // Retorna o volume calculado
  return volume;
}

// Função para calcular o volume de um hemisfério
const calculateHemisphereVolume = (radius) => {
  // Verifica se o raio é um número válido
  validateNumber(radius, 'Radius');
  
  // Calcula o volume do hemisfério (2.0 * π * raio elevado ao cubo / 3.0)
  const volume = (2.0 * Math.PI * radius ** 3) / 3.0;
  
  // Retorna o volume calculado
  return volume;
}

// Função auxiliar para verificar se o valor é um número
const validateNumber = (value, dimension) => {
  // Verifica se o valor não é um número
  if (typeof value !== 'number' || isNaN(value)) {
    // Lança um erro indicando a dimensão com valor inválido
    throw new Error(`${dimension} must be a valid number.`);
  }
}

export { calculateCuboidVolume, calculateCubeVolume, calculateConeVolume, calculatePyramidVolume, calculateCylinderVolume, calculateTriangularPrismVolume, calculatePentagonalPrismVolume, calculateSphereVolume, calculateHemisphereVolume }
