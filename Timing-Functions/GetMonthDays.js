/**
 * Retorna o número de dias em um mês específico.
 * @param {number} monthNumber - Número do mês (1 a 12).
 * @param {number} year - Ano para verificar se é um ano bissexto.
 * @returns {number} Número de dias no mês.
 */
const getMonthDays = (monthNumber, year) => {
  const daysInMonth = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
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
    throw new TypeError('Número de mês inválido.');
  }

  return daysInMonth[monthNumber];
};

/**
 * Verifica se um ano é bissexto.
 * @param {number} year - Ano para verificar.
 * @returns {boolean} Verdadeiro se o ano for bissexto, falso caso contrário.
 */
const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export {
  getMonthDays
};