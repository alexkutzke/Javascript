/*
  Given a string of characters, return the character that appears the most often.
  Example: input = "Hello World!" return "l"
*/
const maxCharacter = (value) => {
  validateString(value)
  let occurrences = getOccurrencesByChar(value)
  return getMaxCharByOccurrences(occurrences)
}

function validateString(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The param should be a string')
  } else if (!value) {
    throw new Error('The param should be a valid string')
  }
}

function getOccurrencesByChar(value) {
  let occurrences = {}
  for (let i in value) {
    const char = value[i]
    if (isSpaceChar(char)) continue
    occurrences[char] = occurrences[char] + 1 || 1
  }
  return occurrences;
}

function isSpaceChar(char) {
  return /\s/.test(char);
}

function getMaxCharByOccurrences(occurrences) {
  let maxCharacterInValue = null
  let maxCount = 0
  Object.keys(occurrences).forEach(char => {
    if (occurrences[char] > maxCount) {
      maxCount = occurrences[char]
      maxCharacterInValue = char
    }
  })
  return maxCharacterInValue
}

export { maxCharacter }
