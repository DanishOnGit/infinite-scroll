import { DATE, MONTHS } from "../utils/constants";

export const Date = ({ value, day, month }) => {

let dateStyle = false;
if(value===DATE.getDate()&&month>0){
    if((value===1&&month-1===DATE.getMonth())||(value!==1&&month-1===DATE.getMonth())){
        dateStyle=true
    }
}

  return (
    <div className={"date" + (!day ? "sunday" : "")}>
      <div className="date-box">
        <span className={"text" + dateStyle?"active":""}> {value}</span>
        {value === 1 ? (
          <div className="month">{MONTHS[month - 1].substr(0, 3)}</div>
        ) : null}
      </div>
    </div>
  );
};
