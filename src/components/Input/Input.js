import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <input
      onKeyDown={props.onEnter}
      className={classes.Input}
      placeholder="Type Username + Enter"
    ></input>
  );
};

export default input;
