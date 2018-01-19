import React, {Component} from 'react'
import './UnderConstruction.css'

export default class UnderConstruction extends Component {
  render () {
    return (
      <div className="under-construction">
            <div className="more-info-container">
                <span>This website is still under construction</span>
                <input type="checkbox" id="more-info-check"/>
                <label htmlFor="more-info-check">More Info...</label>
                <div className="info-extended">
                    Thanks for visiting! In the projects section you will find a link to an on-going project under 'Application Development'
                    this project is not complete yet.
                </div>
            </div>
          <div className="close-uc" onClick={this.props.closeUnderConstruction}></div>
      </div>
    )
  }
}
