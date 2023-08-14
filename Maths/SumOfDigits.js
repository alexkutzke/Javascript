/*
  Gets the sum of the digits of the numbers inputted
  sumOfDigits(10) will return 1 + 0 = 1
  sumOfDigits(255) will return 2 + 5 + 5 = 12
  Wikipedia: https://en.wikipedia.org/wiki/Digit_sum
*/

/*
  The given input is converted to a string, split into an array of characters.
  This array is reduced to a number using the method <Array>.reduce
  NOTE: The final parseInt is just there in cases where 1 digit numbers are given, since without that it would result in a String output.
*/
function sumOfDigitsUsingString (number) {
  number = calculateAbsolutValue(number)
  return splitStringAndSumDigits(number)
}

/*
  The input is divided by 10 in each iteration, till the input is equal to 0
  The sum of all the digits is returned (The res variable acts as a collector, taking the remainders on each iteration)
*/
function sumOfDigitsUsingLoop (number) {
  number = calculateAbsolutValue(number)
  return iterateNumberAndSumDigits(number)
}

/*
  We use the fact that the sum of the digits of a one digit number is itself, and check whether the number is less than 10. If so, then we return the number. Else, we take the number divided by 10 and floored, and recursively call the function, while adding it with the number mod 10
*/
function sumOfDigitsUsingRecursion (number) {
  number = calculateAbsolutValue(number)
  if (number < 10) {
    return number
  }

  return (
    getLastDigit(number)) +
    sumOfDigitsUsingRecursion(removeLastDigit(number))
}

function calculateAbsolutValue (number) {
  if (isNegative(number)) {
    number = changeSignal(number)
  }
  return number
}

function isNegative (number) {
  return number < 0
}

function changeSignal (number) {
  return -number
}

function splitStringAndSumDigits (number) {
  const digits = splitStringInDigits(number)
  return sumDigits(digits)
}

function splitStringInDigits (string) {
  return string.toString().split('')
}

function sumDigits (digits) {
  let total = 0
  for (const digit of digits) {
    total += Number(digit)
  }
  return total
}

function iterateNumberAndSumDigits (number) {
  let total = 0
  while (number > 0) {
    total += getLastDigit(number)
    number = removeLastDigit(number)
  }
  return total
}

function getLastDigit (number) {
  return number % 10
}

function removeLastDigit (number) {
  return Math.floor (number / 10)
}

export { sumOfDigitsUsingRecursion, sumOfDigitsUsingLoop, sumOfDigitsUsingString }