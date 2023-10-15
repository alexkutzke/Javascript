/**
 *
 *  This script will find next power of two
 *    of given number.
 *  More about it:
 *   https://www.techiedelight.com/round-next-highest-power-2/
 *
 */

export function nextPowerOfTwo(inputNumber) {
  if (isPowerOfTwo(inputNumber)) {
    return inputNumber;
  } else {
    return calculateNextPowerOfTwo(inputNumber);
  }
}

function isPowerOfTwo(number) {
  return number > 0 && (number & (number - 1)) === 0;
}

function calculateNextPowerOfTwo(inputNumber) {
  let result = 1;
  let number = inputNumber;

  while (number > 0) {
    result = result << 1;
    number = number >> 1;
  }

  return result;
}
