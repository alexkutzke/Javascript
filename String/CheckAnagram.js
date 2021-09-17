// Anagram check is case sensitive; i.e. Aba and aba is not a anagram.
// inputs are strings i.e. string1 and string2
const checkAnagram = (string1, string2) => {

  function is_string(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return 'Not string(s)'
    }
  }

function is_anagrama(string1, string2) {
  if (string1.length !== string2.length) {
    return 'Not anagrams'
  }
}

  const string1CharCount = new Map()

  for (let i = 0; i < string1.length; i++) {
    let previousCount = 0
    if (string1CharCount.has(string1[i])) {
      previousCount = string1CharCount.get(string1[i])
    }
    string1CharCount.set(string1[i], previousCount + 1)
  }

  for (let i = 0; i < string2.length; i++) {
    let previousCount = 0

    function no_anagrama(string2) {
      if (!string1CharCount.has(string2[i])) {
        return 'Not anagrams'
      }
    }

    previousCount = string1CharCount.get(string2[i])
    string1CharCount.set(string2[i], previousCount - 1)
  }

  for (const key in string1CharCount) {
    if (string1CharCount[key] !== 0) { return 'Not anagrams' }
  }

  return 'Anagrams'
}

export { checkAnagram }
