import React, {Component} from 'react'
import './Sidebar.css';
import Subtitle from './../Titles/Subtitle'
import logo from '../../assets/img/CVLogo.svg'

export default class Sidebar extends Component {
  render () {
    var titleText = 'Help me improve my portfolio'
    return (
      <aside className="show">
          <div className="aside-logo">
            <img src={logo} alt="Carlos Valencia Logo"/>
          </div>
          <ul className="aside-links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="poll-container">
            <Subtitle titleText={titleText} />
            <p>
              Do you like the moving image background?
            </p>
            <ul className="poll-options">
              <li>
                not a fan
              </li>
              <li>
                It's ok
              </li>
              <li>
                Love it!
              </li>
            </ul>
          </div>
      </aside>
    )
  }
}
