import React, {Component} from 'react'
import './Footer.css';
import Titles from './../Titles/Titles'

export default class Footer extends Component {
  render () {
    var titleText = 'CONTACT'
    var personalEmail = 'carlos_valencia@live.com'
    return (
      <div className="footer-container" id="contact">
          <Titles titleText={titleText} />
          <p className="personal-email">{personalEmail}</p>
          <div>
            <ul className="social-footer-container">
              <li>
                <a href="https://github.com/valecarlos">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/4224574/randomguy04">
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/carlos-frontend/">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}
