import React from "react";
import ResultContainer from "./ResultContainer/ResultContainer";
import { TextField } from "@material-ui/core";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextField label="Type your current city name..." />
      <ResultContainer />
      <ResultContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
