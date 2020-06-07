import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import FlightInfo from "../FlightInfo/FlightInfo";

const ResultContainer = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [futureCityName, furuteCityName] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        borderRadius: "1%",
        minHeight: "10em",
        minWidth: "80%",
        margin: "5px",
        padding: "15px"
      }}
    >
      <div>
        <TextField
          label="Type your future city name..."
          size={"small"}
          onChange={e => setTempCityName(e.currentTarget.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => furuteCityName(tempCityName)}
        >
          Get Info!
        </Button>
      </div>
      <WeatherInfo cityName={futureCityName} />
      <FlightInfo
        toCity={
          props.fromCity !== "" && futureCityName === "" && futureCityName
        }
        fromCity={
          props.fromCity !== "" && futureCityName === "" && props.fromCity
        }
        fromDate="07/08/2020"
        toDate="10/08/2020"
      />
    </div>
  );
};

export default ResultContainer;
