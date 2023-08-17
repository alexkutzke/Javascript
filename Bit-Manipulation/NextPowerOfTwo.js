/**
 *
 *  This script will find next power of two
 *    of given number.
 *  More about it:
 *   https://www.techiedelight.com/round-next-highest-power-2/
 *
 */

export const nextPowerOfTwo = (n) => {
  if (isPowerOfTwo(n)) {
    return n
  }

  let result = 1
  while (result < n) {
    result <<= 1
  }

  return result
}

const isPowerOfTwo = (num) => {
  return num > 0 && (num & (num - 1)) === 0
}
