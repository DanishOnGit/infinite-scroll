import {
  DATE,
  DAYSINMONTH,
  DAYSINWEEK,
  MONTHSINYEAR,
  WEEKSINYEAR,
} from "./constants";

// program to check leap year
export function checkLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

export function getMonthsInAYear(year) {
  return [
    31,
    checkLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
}

//zellers rule

function calcFirstDayOfYear(y, M = 0, k = 1) {
  const m = ((M + 10) % 12) + 1;
  const D = (y % 100) - (m > 10 ? 1 : 0);
  const C = Math.floor(y / 100);
  const F =
    k +
    Math.floor((13 * m - 1) / 5) +
    D +
    Math.floor(D / 4) +
    Math.floor(C / 4) -
    2 * C;
  const T = F > 0 ? F : (F - (Math.floor(F) + 2) * 7) % 7;
  return T % 7;
}

export function generateDateGrid() {
  const dateGrid = Array.from({ length: WEEKSINYEAR }, (_) =>
    Array.from({ length: DAYSINWEEK }, (_) => [1])
  );

  const startDayOfTheYear = calcFirstDayOfYear(DATE.getFullYear());
  console.log({ startDayOfTheYear });
  //to fill first week o grid;
  console.log(dateGrid);
  console.log("daysinmonth",DAYSINMONTH);

  for (let i = 0; i < startDayOfTheYear; i++) {
    dateGrid[0][i][0] = DAYSINMONTH[11] - (startDayOfTheYear - 1) + i;
  }
  let weekValue = 0;
  let k = startDayOfTheYear;

  for (let i = 0; i < MONTHSINYEAR; i++) {
    for (let j = 0; j < DAYSINMONTH[i]; j++) {
      dateGrid[weekValue][k][0] = j + 1;
      k++;
      if (k === DAYSINWEEK) {
        k = 0;
        weekValue++;
      }
    }
  }
  for (let i = k; i < DAYSINWEEK; i++) {
    dateGrid[weekValue][i][0] = i - k + 1;
  }
  return dateGrid;
}
