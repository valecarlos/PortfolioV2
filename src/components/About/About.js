import React, { Component } from "react";
import "./About.css";
import Titles from "./../Titles/Titles";
import SocialMain from "./../SocialMain/SocialMain";
import twitterLogo from "./../../assets/img/Twitter_Logo_White_On_Image.svg";

export default class About extends Component {
  render() {
    var titleText = "ABOUT";
    return (
      <div className="about-container" id="about">
        <div className="about-text">
          <Titles titleText={titleText} />
          <p>
            I started my development career as a C# developer and switched to
            Javascript later on. I have been working on the Backend with NodeJS,
            from Database definition and API design (REST and GraphQL), all the
            way to consuming these resources on Web apps and Mobile Apps, mainly
            with React and React Native. (plus other older libraries).
          </p>
          <p>
            On my free time I have enjoyed contributing back to the community on
            Stack Overflow, although it is hard now to find a space on my
            calendar. I also enjoy playing ping pong and Volleyball.
          </p>
          <p>Currently working towards improving my skills as a software architect.</p>
        </div>
        <SocialMain />
        <a
          href="https://twitter.com/ChromeDevTools/status/860504846398390272"
          className="banner"
        >
          <div>
            <span>
              <img
                className="twitter-logo"
                src={twitterLogo}
                alt="twitter Logo"
              />
            </span>
            <span>
              See one of my SO question featured by the official @ChromeDevTools
              Twitter Account
            </span>
          </div>
        </a>
      </div>
    );
  }
}
