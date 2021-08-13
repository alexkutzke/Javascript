const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function convertRomanToDecimal (romanNumber) {
  let previousRoman = ' '
  let decimalNumber = 0
  let newPreviousRoman = 0

  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const c = romanNumber.charAt(i)

    if (previousRoman !== ' ') {
      newPreviousRoman = romanValues[previousRoman] > newPreviousRoman ? romanValues[previousRoman] : newPreviousRoman
    }

    const currentNum = romanValues[c]
    if (currentNum >= newPreviousRoman) {
      decimalNumber += currentNum
    } else {
      decimalNumber -= currentNum
    }

    previousRoman = c

  }
  return decimalNumber
}

console.log(convertRomanToDecimal('XXIIVV'))
console.log(convertRomanToDecimal('MDCCCIV'))
console.log(convertRomanToDecimal('XXIVI'))
