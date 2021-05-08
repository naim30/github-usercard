import React from "react";

import classes from "./UserInfo.module.css";
import Info from "./Info/Info";

const userInfo = (props) => {
  let userInfo = [];
  for (let i in props.userInfo) {
    userInfo.push(
      <Info
        key={i}
        label={i.replace(i[0], i[0].toUpperCase())}
        value={props.error ? 0 : props.userInfo[i]}
      />
    );
  }

  return <div className={classes.UserInfo}>{userInfo}</div>;
};

export default userInfo;
