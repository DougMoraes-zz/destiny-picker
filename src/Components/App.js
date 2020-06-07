import React, { useState } from "react";
import ResultContainer from "./ResultContainer/ResultContainer";
import { TextField, Button } from "@material-ui/core";

const App = props => {
  const [tempCityName, setTempCityName] = useState("");
  const [currentCityName, setCurrentCityName] = useState("");

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
