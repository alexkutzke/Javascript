/**
 *
 *  This script will find the next power of two
 *  of the given number.
 *  More about it:
 *   https://www.techiedelight.com/round-next-highest-power-2/
 *
 */

export const nextPowerOfTwo = (number) => {
  if (ifHigherThanZero(number) && ifIsPowerOfTwo(number)) return number
  const result = binaryHandler(number)
  return result
}

function ifHigherThanZero(number) {
  return number > 0
}

function ifIsPowerOfTwo(number) {
  return (number & (number - 1)) === 0
}

function binaryHandler(number) {
  // starting the variable with 1
  let result = 1
  while (number > 0) {
    // binary left shift
    result = result << 1
    // binary right shift
    number = number >> 1
  }
  return result
}
