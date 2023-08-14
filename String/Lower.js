/**
 * @function lower
 * @description Will convert the entire string to lowercase letters.
 * @param {String} str - The input string
 * @returns {String} Lowercase string
 * @example lower("HELLO") => hello
 * @example lower("He_llo") => he_llo
 */

function lower (string) {
  if (!stringIsValid(string)) {
    showValidationError()
  }

  return string.toLowerCase()
}

function stringIsValid (string) {
  return typeof string === 'string'
}

function showValidationError () {
  throw new TypeError('Invalid Input Type')
}

export default lower
