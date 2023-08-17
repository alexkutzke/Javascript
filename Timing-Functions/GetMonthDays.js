/**
  function that takes month number and its year and returns the number of days within it
  * @param monthNumber.
  * @param year.
  e.g.: mahfoudh.arous@gmail.com -> true
  e.g.: mahfoudh.arous.com ->false
*/
// Trabalho feito por Guilherme Guimarães e Luciano Bastos

function getMonthDays(monthNumber, year) {
  if (monthNumber < 1 || monthNumber > 12)
    throw new TypeError("Mês Invalido")

    return new Date(year, monthNumber, 0).getDate();
}

export { daysInMonth } 
