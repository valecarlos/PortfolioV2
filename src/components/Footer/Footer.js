import React, {Component} from 'react'
import './Footer.css';
import Titles from './../Titles/Titles'

export default class Footer extends Component {
  render () {
    var titleText = 'CONTACT'
    return (
      <div className="footer-container">
          <Titles titleText={titleText} />
      </div>
    )
  }
}
