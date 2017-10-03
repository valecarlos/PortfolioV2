import React, {Component} from 'react'
import './Sidebar.css';
import Subtitle from './../Titles/Subtitle'
import logo from '../../assets/img/CVLogo.svg'

export default class Sidebar extends Component {
  render () {
    var titleText = 'Help me improve my portfolio'
    return (
      <div>
        <div className="burger-menu" onClick={() => this.props.changeSideBarVisibility(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <aside className={this.props.sidebarVisible ? 'show' : ''}>
            <div className="close-nav" onClick={() => this.props.changeSideBarVisibility(false)}>
            </div>
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
                  <input id="down" type="radio" value="down" name="radioPoll"/>
                  <label htmlFor="down">Not a fan</label>
                </li>
                <li>
                  <input id="neutral" type="radio" value="neutral" name="radioPoll"/>
                  <label htmlFor="neutral">It's ok</label>
                </li>
                <li>
                  <input id="up" type="radio" value="up" name="radioPoll"/>
                  <label htmlFor="up">Love it!</label>
                </li>
              </ul>
            </div>
            <div className="poll-alert">
              <p>
                Thanks for your vote!
              </p>
            </div>
            <ul className="social-container">
              <li>
                <a href="#">G</a>
              </li>
              <li>
                <a href="#">L</a>
              </li>
              <li>
                <a href="#">S</a>
              </li>
            </ul>
        </aside>
      </div>
    )
  }
}
