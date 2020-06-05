import React from "react";
import { TextField } from "@material-ui/core";

const ResultContainer = props => {
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
      <TextField label="Type your future city name..." size={"small"} />
    </div>
  );
};

export default ResultContainer;
