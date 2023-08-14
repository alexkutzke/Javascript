const romanNumersValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

let previousRomanNumber = ' '
let decimalNumber = 0
let newPreviousRomanNumber = 0

export function romanToDecimal (romanNumber) {
  setupVariables()
  for (let index = romanNumber.length - 1; index >= 0; index--) {
    getCurrentNumber(romanNumber, index)
  }
  return decimalNumber
}

function getCurrentNumber (romanNumber, index) {
  const currentRomanNumber = romanNumber.charAt(index)

  newPreviousRomanNumber = getNewPreviousRomanNumber(previousRomanNumber)

  const currentNum = romanNumersValues[currentRomanNumber]
  currentNum >= newPreviousRomanNumber ? decimalNumber += currentNum : decimalNumber -= currentNum

  previousRomanNumber = currentRomanNumber
}

function getNewPreviousRomanNumber (previousRomanNumber) {
  if (previousRomanNumber !== ' ') {
    newPreviousRomanNumber = romanNumersValues[previousRomanNumber] > newPreviousRomanNumber ? romanNumersValues[previousRomanNumber] : newPreviousRomanNumber
  }
  return newPreviousRomanNumber
}

function setupVariables () {
  previousRomanNumber = ' '
  decimalNumber = 0
  newPreviousRomanNumber = 0
}
