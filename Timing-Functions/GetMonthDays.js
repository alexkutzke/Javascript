/**
  function that takes month number and its year and returns the number of days within it
  * @param monthNumber.
  * @param year.
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/

const getMonthDays = (monthNumber, year) => {
  isValidMonth(monthNumber)
  return calculateMonthDays(monthNumber, year)
}

const isValidMonth = monthNumber => {
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    throw new TypeError('Invalid Month Number.')
  }
}

const calculateMonthDays = (monthNumber, year) => {
  if (has31Days(monthNumber)) { return 31 }

  if (has30Days(monthNumber)) { return 30 }

  if (isLeapYear(year)) { return 29 }

  return 28
}

const has31Days = monthNumber => {
  const the31DaysMonths = [1, 3, 5, 7, 8, 10, 12]
  return the31DaysMonths.includes(monthNumber)
}

const has30Days = monthNumber => {
  const the30DaysMonths = [4, 6, 9, 11]
  return the30DaysMonths.includes(monthNumber)
}

const isLeapYear = year => {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
}

export { getMonthDays }
