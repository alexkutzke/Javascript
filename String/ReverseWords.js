/**
 * Valida os valores do input.
 * 
 * @param {string} str - String do input.
 * @param {string} letter - Letra escolhida.
 * @throws {Error} - Caso os inputs sejam inválidos ou tenha mais ou menos de uma letra.
 */
const validateInputs = (str, letter) => {
  if (typeof str !== 'string' || typeof letter !== 'string' || letter.length !== 1) {
    throw new Error('Os inputs devem ser strings, e a letra deve ser única.');
  }
}

/**
 * Conta as ocorrências da letra na string.
 * 
 * @param {string} str - String do input.
 * @param {string} letter - Letra escolhida.
 * @returns {number} - Quantidade de letras na string.
 */
const countLetterOccurrences = (str, letter) => {
  let count = 0;
  const targetLetter = letter.toLowerCase();
  
  for (const char of str) {
    if (char.toLowerCase() === targetLetter) {
      count++;
    }
  }

  return count;
}

/**
 * Retorna o percentual de letras dentro da string arredondado ao precentual mais próximo.
 * 
 * @param {string} str - String fornecida.
 * @param {string} letter - Letra escolhida.
 * @returns {number} - Percentual de letras em relação a string.
 * 
 */
const percentageOfLetter = (str, letter) => {
  validateInputs(str, letter);
  const letterCount = countLetterOccurrences(str, letter);
  return Math.floor((100 * letterCount) / str.length);
}

export { percentageOfLetter };
