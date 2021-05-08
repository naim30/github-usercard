import React from "react";

import classes from "./Layout.module.css";
import GithubCard from "../../containers/GithubCard/GithubCard";

const layout = (props) => {
  return (
    <div className={classes.Layout}>
      <GithubCard />
    </div>
  );
};

export default layout;
