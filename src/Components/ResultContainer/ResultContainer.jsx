import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const ResultContainer = props => {
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
      <TextField
        label="Type your future city name..."
        onChange={e => setCityName(e.currentTarget.value)}
      />
    </div>
  );
};

export default ResultContainer;
