/*
  Gets the sum of the digits of the numbers inputted
  sumOfDigits(10) will return 1 + 0 = 1
  sumOfDigits(255) will return 2 + 5 + 5 = 12
  Wikipedia: https://en.wikipedia.org/wiki/Digit_sum
*/

/*
  The given input is converted to a string, split into an array of characters.

  This array is reduced to a number using the method <Array>.reduce

  NOTE: The final parseInt is just there in cases where 1 digit numbers are given, 
  since without that it would result in a String output.
*/
var sum = 0
var dividido = 0
function sumOfDigitsUsingString(number) {
  dividido = 0
  if (number <= 0) number = -number;
  if (number > 0 && number < 10) return menorDez(number);
  else if (number >= 10) return maior10(number);
}

function menorDez(number) {
  dividido =  "0" + number.toString();
  return sumSplitNumber(dividido)
}

function maior10(number) {
  dividido =  number.toString().split('');
  return sumSplitNumber(dividido)
}

// Função para somar os dígitos de um array de strings
function sumSplitNumber(dividido) {
  let sum = 0;

  for (let inte = 0; inte < dividido.length; inte++) {
    sum += Number(dividido[inte]);
  }

  return sum;
}

/*
  The input is divided by 10 in each iteration, till the input is equal to 0
  The sum of all the digits is returned (The res variable acts as a collector, taking the remainders on each iteration)
*/
function sumOfDigitsUsingLoop(number) {
  if (number < 0) number = -number;

  return divideDez(number);
}

function divideDez(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

/*
  We use the fact that the sum of the digits of a one digit number is itself, and check whether the number is less than 10. If so, then we return the number. Else, we take the number divided by 10 and floored, and recursively call the function, while adding it with the number mod 10
*/
function sumOfDigitsUsingRecursion(number) {
  if (number < 0) return sumOfDigitsUsingRecursion(-number);
  if (number < 10) return number;
  sum = (number % 10) + sumOfDigitsUsingRecursion(Math.floor(number / 10));
  return sum
}


export { sumOfDigitsUsingRecursion, sumOfDigitsUsingLoop, sumOfDigitsUsingString }
function sumDigits(number) {
  sum = (number % 10) + sumOfDigitsUsingRecursion(Math.floor(number / 10));
  return sum
}



export { sumOfDigitsUsingRecursion, sumOfDigitsUsingLoop, sumOfDigitsUsingString }
