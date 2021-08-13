/*
  Given a string of characters, return the character that appears the most often.
  Example: input = "Hello World!" return "l"
*/
const maxCharacter = (characters) => {
  validateString(characters)

  const charOccurrences = getOccurrencesPerChar(characters)
  const maxChar = getCharWithMoreOccurrences(charOccurrences)

  return maxChar
}

function validateString(characters) {
  if (!characters) {
    throw new Error('The param should be a valid string')
  }

  if (!isString(characters)) {
    throw new TypeError('The param should be a string')
  }
}

function isString(characters) {
  return typeof characters === 'string'
}

function getOccurrencesPerChar(characters) {
  const charOccurrences = {}

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i]

    if (isWhiteSpace(char)) {
      continue
    }

    charOccurrences[char] = charOccurrences[char] + 1 || 1
  }

  return charOccurrences
}

function isWhiteSpace(char) {
  return /\s/.test(char)
}

function getCharWithMoreOccurrences(charOccurrences) {
  let maxChar
  let maxOccurrences = 0

  Object.keys(charOccurrences).forEach((char) => {
    if (charOccurrences[char] > maxOccurrences) {
      maxChar = char
      maxOccurrences = charOccurrences[char]
    }
  })

  return maxChar
}

export { maxCharacter }
