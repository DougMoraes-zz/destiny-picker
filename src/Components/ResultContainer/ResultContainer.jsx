import React from "react";
import { TextField } from "@material-ui/core";

const ResultContainer = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        borderRadius: "10%",
        minHeight: "10em",
        margin: "5px"
      }}
    >
      <TextField label="Type a city name..." />
    </div>
  );
};

export default ResultContainer;
