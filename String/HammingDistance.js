/**
 * Hamming Distance: https://en.wikipedia.org/wiki/Hamming_distance
 *
 *
 * Hamming distance is a metric for comparing two binary data strings.
 *
 * While comparing two binary strings of equal length, Hamming distance
 * is the number of bit positions in which the two bits are different.
 * The Hamming distance between two strings, a and b is denoted as d(a,b)
 */

/**
 * @param {string} firstString 
 * @param {string} secondString
 * @return {number}
 */

 export const hammingDistance = (firstString, secondString) => {
  stringLengthChecker(firstString, secondString);

  let distance = 0

  for (let stringIndex = 0; stringIndex < firstString.length; stringIndex += 1) {
    if (firstString[stringIndex] !== secondString[stringIndex]) {
      distance += 1
    }
  }
}

function stringLengthChecker(stringA, stringB){
  if (stringA.length !== stringB.length) {
    return ('Strings must be of the same length');
  }
}
