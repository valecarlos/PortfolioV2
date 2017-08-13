import React, {Component} from 'react'
import './SocialMain.css'
import Github from './../../containers/widgets/Github/Github'
import StackOverflow from './../../containers/widgets/StackOverflow/StackOverflow'

export default class SocialMain extends Component {
  render () {
    return (
      <div className="social-main-container">
          <div className="github-social">
            <Github />
          </div>
          <div className="stackoverflow-social">
            <StackOverflow />
          </div>
      </div>
    )
  }
}
