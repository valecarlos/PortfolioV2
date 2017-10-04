import React, {Component} from 'react'
import './Sidebar.css';
import Subtitle from './../Titles/Subtitle'
import logo from '../../assets/img/CVLogo.svg'
import api from './../../utils/api'
export default class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    const form = document.forms['submit-to-google-sheet']
    event.preventDefault()
    let data = new FormData(form)
    this.props.changeCastState(true)
    api.postPoll(data)
  }
  render () {
    const voteCast = this.props.voteCast
    let titleText = 'Help me improve my portfolio'
    let voteStatus
    if (voteCast) {
      voteStatus = (<div className="poll-alert">
        <p>
          Thanks for your vote!
        </p>
      </div>)
    } else {
      voteStatus = (<button className="submitPoll" type="submit">
        Submit Vote
      </button>)
    }
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
              <form name="submit-to-google-sheet" onSubmit={this.handleSubmit}>
                <ul className={'poll-options ' + (voteCast ? 'vote-cast' : '')}>
                  <li>
                    <input id="down" type="radio" value="down" name="vote" disabled={voteCast}/>
                    <label htmlFor="down">Not a fan</label>
                  </li>
                  <li>
                    <input id="neutral" type="radio" value="neutral" name="vote" disabled={voteCast}/>
                    <label htmlFor="neutral">It's ok</label>
                  </li>
                  <li>
                    <input id="up" type="radio" value="up" name="vote" disabled={voteCast}/>
                    <label htmlFor="up">Love it!</label>
                  </li>
                </ul>
                {voteStatus}
              </form>
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
