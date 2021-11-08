/**
 * Caesar's Cipher - also known as the ROT13 Cipher is when
 * a letter is replaced by the one that is 13 spaces away
 * from it in the alphabet. If the letter is in the first half
 * of the alphabet we add 13, if it's in the latter half we
 * subtract 13 from the character code value.
 */

/**
 * Decrypt a ROT13 cipher
 * @param {String} str - string to be decrypted
 * @return {String} decrypted string
 */
 
function isSpecialCharacter(char) {
  return char < 'A' || (char > 'Z' && char < 'a') || char > 'z';
}

function isGreaterThanM(char) {
  return (char > 77 && char <= 90) || (char > 109 && char <= 122)
}

function rotated(char) {
	if (isSpecialCharacter(char)) {
      return char;
  } else if (isGreaterThanM(char)) {
    	return String.fromCharCode(char - 13);
  } else {
    return String.fromCharCode(char + 13);
  }
}

function rot13(str) {
  const response = [];
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    const char = str.charCodeAt(i);
		response.push(rotated(char))
  }
  
  return response.join('');
}

// Caesars Cipher Example
const encryptedString = 'Uryyb Jbeyq';
const decryptedString = rot13(encryptedString);

console.log(decryptedString); // Hello World
