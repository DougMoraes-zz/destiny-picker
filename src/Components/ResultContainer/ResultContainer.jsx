import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import FlightInfo from "../FlightInfo/FlightInfo";
import "./ResultContainer.scss";

const ResultContainer = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [futureCityName, setFutureCityName] = useState("");

  return (
    <div className="result-container">
      <div className="future-city-form">
        <TextField
          label="Future city name..."
          onChange={e => setTempCityName(e.currentTarget.value)}
          margin="normal"
          variant="outlined"
          disabled={props.currentCity === ""}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setFutureCityName(tempCityName)}
          disabled={props.currentCity === ""}
        >
          Get Info!
        </Button>
      </div>
      <WeatherInfo className="result-item" cityName={futureCityName} />
      <FlightInfo
        className="result-item"
        toCity={futureCityName}
        fromCity={props.currentCity}
        fromDate={props.flightDate}
        toDate={props.flightDate}
      />
    </div>
  );
};

export default ResultContainer;

ResultContainer.propTypes = {
  currentCity: PropTypes.string.isRequired
};
