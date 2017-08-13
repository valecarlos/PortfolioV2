import React, {Component} from 'react'
import './StackOverflow.css'
import api from './../../../utils/api'
import StackOverflowLogo from './../../../assets/img/so-logo.svg'

export default class StackOverflow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: null
    }

    this.getStackOverflowInfo = this.getStackOverflowInfo.bind(this)
  }

  componentDidMount () {
    // invoked whenever the component is mount to the screen/shown to the view
    // AJAX
    this.getStackOverflowInfo(this.state.selectedLanguage)
  }

  getStackOverflowInfo () {
    api.getStackOverflowProfile()
      .then(function (profile) {
        console.log(profile, 'got the profile from SO')
        this.setState(function () {
          return {
            profile
          }
        })
      }.bind(this))
  }
  render () {
    return (
      <div className="stackoverflow-container">
        <div>
          <img className="stackoverflow-logo" src={StackOverflowLogo} alt="StackOverflow logo"/>
        </div>
        <div className="stackoverflow-info">
          <div className="reputation">{this.state.profile ? this.state.profile.reputation : 0}</div>
          <div className="badges">
            <div className="badge">
                <span className="silverBadge"></span>
                <span>{this.state.profile ? this.state.profile.badge_counts.silver : 0}</span>
                </div>
            <div className="badge">
                <span className="bronzeBadge"></span>
                <span>{this.state.profile ? this.state.profile.badge_counts.bronze : 0}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
