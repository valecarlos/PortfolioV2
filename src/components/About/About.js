import React, {Component} from 'react'
import './About.css';
import Titles from './../Titles/Titles'
import SocialMain from './../SocialMain/SocialMain'
import twitterLogo from './../../assets/img/Twitter_Logo_White_On_Image.svg'

export default class About extends Component {
  render () {
    var titleText = 'ABOUT'
    return (
      <div className="about-container">
        <div className="about-text">
          <Titles titleText={titleText} />
          <p>I am currently working on improving my skills, most recently, I have decided to give back to the community of StackOverflow and contribute whenever I have the chance.</p>
          <p>I am also creating different projects on GitHub in order to implement and try different ideas and keep myself updated with different technologies.</p>
        </div>
        <SocialMain />
        <a href="https://twitter.com/ChromeDevTools/status/860504846398390272" className="banner">
          <div>
            <span>
              <img className="twitter-logo" src={twitterLogo} alt="twitter Logo"/>
            </span>
            <span>
              See one of my SO question featured by the official @ChromeDevTools Twitter Account
            </span>
          </div>
        </a>
      </div>
    )
  }
}
