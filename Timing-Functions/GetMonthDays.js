/**
  function that takes month number and its year and returns the number of days within it
  * @param monthNumber.
  * @param year.
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/

const the31DaysMonths = [1, 3, 5, 7, 8, 10, 12];
const the30DaysMonths = [4, 6, 9, 11];

const validMonths = [...the31DaysMonths, ...the30DaysMonths, ...[2]];

const isValidMonth = (monthNumber) => {
  return validMonths.includes(monthNumber);
}

const isLeapYear = (year) => {
  return ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)))
}
 
const getMonthDays = (monthNumber, year) => {
  if(!isValidMonth(monthNumber))
    throw new TypeError('Invalid Month Number.');  
  
  return the31DaysMonths.includes(monthNumber) ? 31 : (the30DaysMonths.includes(monthNumber) ? 30 : (isLeapYear(year) ? 29 : 28));  
}

export { getMonthDays }