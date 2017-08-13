import React, {Component} from 'react'
import './Github.css'
import api from './../../../utils/api'
import githubLogo from './../../../assets/img/GitHub_Logo.png'
import githubMark from './../../../assets/img/GitHub-Mark.png'

export default class Github extends Component {
  constructor (props) {
    super(props)

    this.state = {
      repos: null
    }

    this.getGithubInfo = this.getGithubInfo.bind(this)
  }

  componentDidMount () {
    // invoked whenever the component is mount to the screen/shown to the view
    // AJAX
    this.getGithubInfo(this.state.selectedLanguage)
  }

  getGithubInfo () {
    api.getUserData()
      .then(function (repos) {
        console.log(repos, 'got the repos from the api')
        this.setState(function () {
          return {
            repos
          }
        })
      }.bind(this))
  }
  render () {
    return (
      <div className="github-container">
        <div>
          <img className="github-mark" src={githubMark} alt="github mark"/>
          <img className="github-logo" src={githubLogo} alt="github logo"/>
        </div>
        <div className="github-info">
          <span>{this.state.repos ? this.state.repos.profile.public_repos : 0}</span> Repositories
        </div>
      </div>
    )
  }
}
