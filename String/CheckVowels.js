/*
  Given a string of words or phrases, count the number of vowels.
  Example: input = "hello world" return 3
 */


const countVowels = (string) => {
    validateString(string)
    vowels = getVowelsAmount(string)
  return vowels
}


function validateString(string){
  if (typeof string !== 'string') {
    throw new TypeError('The first param should be a string')
  }    
}


function getVowelsAmount(string){

    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    let vowelsAmount = 0
    
    for (let i = 0; i < string.length; i++) {
	
	const letter = string[i].toLowerCase()
	if (vowels.includes(letter)) {
	    vowelsAmount++
	}
    }
    return vowelsAmount
}    


export { countVowels }
