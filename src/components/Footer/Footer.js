import React, {Component} from 'react'
import './Footer.css';
import Titles from './../Titles/Titles'

export default class Footer extends Component {
  render () {
    var titleText = 'CONTACT'
    var personalEmail = "carlos_valencia@live.com"
    return (
      <div className="footer-container">
          <Titles titleText={titleText} />
          <p className="personal-email">{personalEmail}</p>
      </div>
    )
  }
}
