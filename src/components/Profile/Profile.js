import React from "react";

import classes from "./Profile.module.css";

const profile = (props) => {
  return (
    <div className={classes.Profile}>
      {props.error ? null : (
        <a href={props.url}>
          <img
            className={classes.Image}
            src={props.avtarUrl}
            alt="user Profile"
          />
        </a>
      )}
      <div className={classes.Username}>
        {props.error ? "Oops!!" : props.name}
      </div>
      <div className={classes.Location}>
        {props.error ? "something went wrong.." : props.location}
      </div>
    </div>
  );
};

export default profile;
