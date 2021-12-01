// program to check leap year
export function checkLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

export function getMonthsInAYear(year){
    return [31,checkLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31]
}
