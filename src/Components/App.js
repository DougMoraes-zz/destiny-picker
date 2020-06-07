import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import ResultContainer from "./ResultContainer/ResultContainer";

const App = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [currentCityName, setCurrentCityName] = useState("");
  const [flightDate, setFlightDate] = useState(new Date());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextField
        label="Type your current city name..."
        onChange={e => setTempCityName(e.currentTarget.value)}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Fly Date"
          value={flightDate}
          onChange={date => setFlightDate(date)}
        />
      </MuiPickersUtilsProvider>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setCurrentCityName(tempCityName)}
      >
        Let's start!
      </Button>
      <ResultContainer currentCity={currentCityName} />
      <ResultContainer currentCity={currentCityName} />
      <ResultContainer currentCity={currentCityName} />
    </div>
  );
};

export default App;
