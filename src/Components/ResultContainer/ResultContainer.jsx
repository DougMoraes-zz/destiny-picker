import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const ResultContainer = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [cityName, setCityName] = useState("");

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
          onClick={() => setCityName(tempCityName)}
        >
          Get Info!
        </Button>
      </div>
      <WeatherInfo cityName={cityName} />
    </div>
  );
};

export default ResultContainer;
