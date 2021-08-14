  /* ORIGINAL:
    function sieveOfEratosthenes (n) {
    
       Calculates prime numbers till a number n
       :param n: Number upto which to calculate primes
       :return: A boolean list contaning only primes
       
    const primes = new Array(n + 1)
    primes.fill(true) // set all as true initially
    primes[0] = primes[1] = false // Handling case for 0 and 1
    const sqrtn = Math.ceil(Math.sqrt(n))
    for (let i = 2; i <= sqrtn; i++) {
      if (primes[i]) {
        for (let j = 2 * i; j <= n; j += i) {
          primes[j] = false
        }
      }
    }
    return primes
  }
  
  function main () {
    const n = 69 // number till where we wish to find primes
    const primes = sieveOfEratosthenes(n)
    for (let i = 2; i <= n; i++) {
      if (primes[i]) {
        console.log(i)
      }
    }
  }
  
  main()
  */
  
  function initialArraySetupForSieve (inputNumber) {
    let booleanArray = new Array(inputNumber+1)
    booleanArray.fill(true)
    booleanArray[0] = booleanArray[1] = false
    return booleanArray
  }  

   function sieveOfEratosthenesMethod (inputNumber) {
    const booleanArrayForSieve = initialArraySetupForSieve(inputNumber) 
    const inputNumberSqrtCeil = Math.ceil(Math.sqrt(inputNumber))
    for (let limiterIndex = 2; limiterIndex <= inputNumberSqrtCeil; limiterIndex++) {
      if (booleanArrayForSieve[limiterIndex]) {
        for (let checkIfMultiple = 2 * limiterIndex; checkIfMultiple <= inputNumber; checkIfMultiple += limiterIndex) {
          booleanArrayForSieve[checkIfMultiple] = false
        }
      }
    }
    return booleanArrayForSieve
  }

  function checkIfNumberIsValidForSieve (numberToCheck) {
    if (numberToCheck < 0) {
      throw new console.error('O método não pode ser utilizado para números negativos.')
    }
  }

  function printPrimeNumbersUpTo (finalNumber) {
    checkIfNumberIsValidForSieve (finalNumber)
    const primesBooleanArray = sieveOfEratosthenesMethod(finalNumber)
    for (let arrayIndex = 2; arrayIndex <= finalNumber; arrayIndex++) {
      if (primesBooleanArray[arrayIndex]) {
        console.log(arrayIndex)
      }
    }
  }
  
  printPrimeNumbersUpTo(97)
