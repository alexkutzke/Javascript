/*
    Explanation :- a user gives a String (it can be incomplete uppercase or
        partial uppercase) and then the program would convert it into a
        complete(all characters in lower case) lower case string. The
        logic we have used in the following program is: All the upper case
        characters (A-Z) has ASCII value ranging from 65 to 90 and their
        corresponding lower case characters (a-z) have ASCII values 32
        greater than them. For example ‘A‘ has an ASCII value of 65
        and ‘a‘ has an ASCII value of 97 (65+32). The same applies to other
        characters.
*/

const CHAR_CODE_UPPERCASE_A = 65;
const CHAR_CODE_UPPERCASE_Z = 90;
const UPPERCASE_TO_LOWERCASE_DISTANCE = 32;

/**
 * LowerCaseConversion takes any case-style string and converts it to the lower case-style string.
 * @param {String} stringToLower any case style string
 * @returns {String} lower case string
 */
const LowerCaseConversion = (stringToLower) => {
  // Take a string and split it into characters.
  const lowerCaseArray = stringToLower.split('').map(character => {
    // Get a character code by the use charCodeAt method.
    const characterCode = character.charCodeAt()
    // If the character code lies between 65 to 90 it means they are in the upper case so convert it.
    if (characterCode >= CHAR_CODE_UPPERCASE_A && characterCode <= CHAR_CODE_UPPERCASE_Z) {
      // Convert the case by use of the above explanation.
      return String.fromCharCode(characterCode + UPPERCASE_TO_LOWERCASE_DISTANCE)
    }
    // Else return the characters without any modification.
    return character
  })
  // After modification, with the help of the join method, join all the characters and return them.
  const lowerCaseString = lowerCaseArray.join('')
  return lowerCaseString;
}

export { LowerCaseConversion }
