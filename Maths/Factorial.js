/*
    author: Cauê Veiga, Renan Laureano

    Realizado melhorias nas sintaxes, realizado limpesa no código e elaboramos funções. 
   
*/
'use strict';

// Retorna uma matriz contendo números de 1 a num
const generateRange = (num) => {
  return [...Array(num).keys()].map(i => i + 1);
};

// Calcula o fatorial de um inteiro positivo
const calculateFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    throw new Error('Factorial does not exist for negative numbers.');
  }
  
  const range = generateRange(num);
  const factorial = range.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return factorial;
};

export { calculateFactorial };

