import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import ResultContainer from "./ResultContainer/ResultContainer";
import "./App.scss";

const App = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [currentCityName, setCurrentCityName] = useState("");
  const [flightDate, setFlightDate] = useState(new Date());

  const translateDateToString = dateObj => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="app">
      <div className="search-form">
        <TextField
          label="Type your current city name..."
          className="search-form-item"
          margin="normal"
          variant="outlined"
          multiline
          onChange={e => setTempCityName(e.currentTarget.value)}
        />
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          className="search-form-item"
        >
          <KeyboardDatePicker
            disableToolbar
            inputVariant="outlined"
            format="dd/MM/yyyy"
            margin="normal"
            label="Flight Date"
            value={flightDate}
            onChange={date => setFlightDate(date)}
          />
        </MuiPickersUtilsProvider>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCurrentCityName(tempCityName)}
          className="search-form-item"
        >
          Let's start!
        </Button>
      </div>
      <ResultContainer
        currentCity={currentCityName}
        flightDate={translateDateToString(flightDate)}
      />
      <ResultContainer
        currentCity={currentCityName}
        flightDate={translateDateToString(flightDate)}
      />
      <ResultContainer
        currentCity={currentCityName}
        flightDate={translateDateToString(flightDate)}
      />
    </div>
  );
};

export default App;
