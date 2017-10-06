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
                    Thanks for visiting! There are still some missing links in the projects section,
                    and some responsive functionality I need to fix. This website is hosted on a free Heroku tier which is why it takes a while to load.
                </div>
            </div>
          <div className="close-uc" onClick={this.props.closeUnderConstruction}></div>
      </div>
    )
  }
}
