import React, { Component } from "react";
import axios from "axios";

import classes from "./GithubCard.module.css";
import Input from "../../components/Input/Input";
import UserInfo from "../../components/UserInfo/UserInfo";
import Profile from "../../components/Profile/Profile";

class GithubCard extends Component {
  state = {
    name: "",
    location: "",
    avtarUrl: "",
    url: "",
    userInfo: {
      followers: 0,
      repository: 0,
      following: 0,
    },
    error: false,
  };

  componentDidMount = () => {
    if (this.state.name.length === 0) {
      axios
        .get("https://api.github.com/users/naim30")
        .then((response) => {
          this.setState({
            name: response.data.name ? response.data.name : response.data.login,
            location: response.data.location
              ? response.data.location
              : "I Live in My Mind",
            avtarUrl: response.data.avatar_url,
            url: response.data.html_url,
            userInfo: {
              followers: response.data.followers,
              repository: response.data.public_repos,
              following: response.data.following,
            },
          });
        })
        .catch((error) => {
          this.setState({
            error: true,
          });
          console.log(this.state);
        });
    }
  };

  userDataHandler = (e) => {
    if (e.keyCode === 13) {
      axios
        .get(`https://api.github.com/users/${e.target.value}`)
        .then((response) => {
          this.setState({
            name: response.data.name ? response.data.name : response.data.login,
            location: response.data.location
              ? response.data.location
              : "I Live in My Mind",
            avtarUrl: response.data.avatar_url,
            url: response.data.html_url,
            userInfo: {
              followers: response.data.followers,
              repository: response.data.public_repos,
              following: response.data.following,
            },
            error: false,
          });
          console.log(this.state);
        })
        .catch((error) => {
          this.setState({
            error: true,
          });
          console.log(this.state);
        });
      e.target.value = "";
    }
  };

  render() {
    return (
      <div className={classes.GithubCard}>
        <Input onEnter={(event) => this.userDataHandler(event)} />
        <Profile
          error={this.state.error}
          name={this.state.name}
          avtarUrl={this.state.avtarUrl}
          location={this.state.location}
          url={this.state.url}
        />
        {this.state.error ? null : (
          <UserInfo userInfo={this.state.userInfo} error={this.state.error} />
        )}
      </div>
    );
  }
}

export default GithubCard;
