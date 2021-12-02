import { DAYSINWEEK, WEEKSINYEAR } from "../utils/constants";
import { generateDateGrid } from "../utils/dateUtils";
import { Date } from "./Date";
import { Month } from "./Month";

export const Calendar = () => {
  const dateGrid = generateDateGrid();
  const firstDayInMonth = [];
  const weekRowValue = [];
  for (let weekIndex = 0; weekIndex < WEEKSINYEAR; weekIndex++) {
    let weekRow = [];
    for (let dayIndex = 0; dayIndex < DAYSINWEEK; dayIndex++) {
      if (dateGrid[weekIndex][dayIndex][0] === 1) {
        firstDayInMonth.push(weekIndex);
      }
      weekRow.push(
        <Date
          value={dateGrid[weekIndex][dayIndex][0]}
          day={dayIndex}
          month={firstDayInMonth.length}
        />
      );
    }
    weekRowValue.push(<div className="week">{weekRow}</div>);
  }

  let currentMonth = 1;
  let monthrow = [];
  const monthRow = Array(WEEKSINYEAR)
    .fill(1)
    .map((val, idx) => {
      if (idx && idx === firstDayInMonth[currentMonth]) {
        const monthValue = <Month mid={currentMonth - 1}>{monthrow}</Month>;
        currentMonth++;
        monthrow = [weekRowValue[idx]];
        return monthValue;
      } else {
        monthrow.push(weekRowValue[idx]);
      }
    });
    return monthRow;
};
