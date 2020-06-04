import React from "react";
import ResultContainer from "./ResultContainer/ResultContainer";

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
      <ResultContainer />
      <ResultContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
