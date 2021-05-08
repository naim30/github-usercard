import React from "react";

import classes from "./Info.module.css";

const info = (props) => {
  return (
    <div className={classes.Info}>
      <div>{props.value}</div>
      <div>{props.label}</div>
    </div>
  );
};

export default info;
