// Anagram check is case sensitive; i.e. Aba and aba is not a anagram.
// inputs are strings i.e. str1 and str2
const checkAnagram = (string1, string2) => {
  // check that inputs are strings.
  // if (typeof str1 !== 'string' || typeof str2 !== 'string') {
  //   return 'Not string(s)'
  // }

  let str1CharCount = new Map()

  validateIsAsString(string1, string2)

  validateIsAsAnagram(string1, string2)


  str1CharCount = StringCompare(string1, string2)

  for (const key in str1CharCount) {
    if (str1CharCount[key] !== 0) { return 'Not anagrams' }
  }
  

  return 'Anagrams'
}

function validateIsAsString (string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Not string(s)'
  }
}

function validateIsAsAnagram (string1, string2) {
  if (string1.length !== string2.length) {
    return 'Not anagrams'
  }
}

function StringCompare(string1, string2) {
  const string1CharCount = new Map()

  for (let i = 0; i < string1.length; i++) {
    let previousCount = 0
    if (string1CharCount.has(string1[i])) {
      previousCount = string1CharCount.get(string1[i])
    }
    string1CharCount.set(string1[i], previousCount + 1)
  }

  // Now check if second string has same characters?

  for (let i = 0; i < string2.length; i++) {
    let previousCount = 0
    // if string1CharCount has no key for string2[i] then not anagram.
    if (!string1CharCount.has(string2[i])) {
      return 'Not anagrams'
    }
    previousCount = string1CharCount.get(string2[i])
    string1CharCount.set(string2[i], previousCount - 1)
  }

   return string1CharCount
}


console.log(checkAnagram("alegria", "regalia"));

//function  () {}
//export { checkAnagram }
