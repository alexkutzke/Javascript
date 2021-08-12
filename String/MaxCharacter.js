/*
  Given a string of characters, return the character that appears the most often.
  Example: input = "Hello World!" return "l"
*/
const letterThatAppearsTheMost = (WordForVerification) => {
	
  const occurrences = {}
  for (let i = 0; i < WordForVerification.length; i++) {
    const char = WordForVerification[i]
    if (/\s/.test(char)) continue
    occurrences[char] = occurrences[char] + 1 || 1
  }
  let maxCharacter = null
  let maxCount = 0
  Object.keys(occurrences).forEach(char => {
    if (occurrences[char] > maxCount) {
      maxCount = occurrences[char]
      maxCharacter = char
    }
  })
  return maxCharacter
}

const maxCharacter = (Word) => {
  if (typeof Word !== 'string') {
    throw new TypeError('The param should be a string')
  } else if (!Word) {
    throw new Error('The param should be a valid string')
  }

  return letterThatAppearsTheMost(Word)
}

export { maxCharacter }
