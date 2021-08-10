// function that takes 10 digits and returns a string of the formatted phone number
// e.g.: 1234567890 -> (12) 3456-7890

const formatPhoneNumber = (phoneNumbers) => {
  const phoneNumbersString = phoneNumbers.toString()
  if ((phoneNumbersString.length !== 10) || isNaN(phoneNumbersString)) {
    // return "Invalid phone number."
    throw new TypeError('Invalid phone number.')
  }
  const arr = '(XX) XXXX-XXXX'.split('')
  Array.from(phoneNumbersString).forEach(n => {
    arr[arr.indexOf('X')] = n
  })
  return arr.join('')
}

export { formatPhoneNumber }
