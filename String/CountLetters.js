/**
 * @function countLetters
 * @description Given a string, count the number of each letter.
 * @param {String} string - The input string
 * @return {Object} - Object with letters and number of times
 * @example countLetters("hello") => {h: 1, e: 1, l: 2, o: 1}
 */

const countLetters = (string) => {
  validateInput(string);

  const lettersTimes = countLettersOfString(string);

  return lettersTimes;
}

function countLettersOfString(string) {
  const lettersTimes = {}

  for (let i = 0; i < string.toLowerCase().length; i++) {
    const char = string.toLowerCase().charAt(i)
    lettersTimes[char] = (lettersTimes[char] || 0) + 1
  }

  return lettersTimes;
}

function validateInput(string) {
  validateInputString(string);
  validateInputSpecialCharacters(string);
  validateInputNumbers(string);
}

function validateInputString(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Input should be a string');
  }
}

function validateInputSpecialCharacters(string) {
  const specialChars = /\W/g

  if (specialChars.test(string)) {
    throw new TypeError('Input must not contain special characters');
  }
}

function validateInputNumbers(string) {
  if (/\d/.test(string)) {
    throw new TypeError('Input must not contain numbers');
  }
}

console.log(countLetters("hello"));

export { countLetters }
