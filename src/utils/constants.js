import { getMonthsInAYear } from "./dateUtils";

export const DATE = new Date();
export const WEEK=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January"
];
 export const DAYSINWEEK=7;
 export const MONTHSINYEAR=12;
 export const WEEKSINYEAR= 54;

 export const DAYSINMONTH = getMonthsInAYear(DATE.getFullYear()) //array of nos