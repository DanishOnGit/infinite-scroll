import React from "react";
import { Tile } from "./components/Tile";
import { DATE, MONTHS, WEEK } from "./utils/constants";
import { Day } from "./components/Day";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1 className="h1">
          {moment().format('MMMM')} <span className="span">{moment().format("yyyy")}</span>
        </h1>
        <div className="row">
          {WEEK.map((day) => (
            <Day day={day} />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
