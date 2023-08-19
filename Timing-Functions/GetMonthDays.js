/**
  function that takes month number and its year and returns the number of days within it
  * @param monthNumber.
  * @param year.
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/

const getMonthDays = (monthNumber, year) => {
  //Array informs how many months and days are present in each one
  const daysInMonth = {
    1: 31,
    2: isBisesto(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error('Invalid Month Number. Please insert a number between 1 and 12');
  }

  return daysInMonth[monthNumber];
};

const isBisesto = (year) => {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 !== 0 || year % 400 === 0) {
    return true;
  }
  return false;
};
