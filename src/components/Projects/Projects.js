import React, {Component} from 'react'
import './Projects.css'
import Titles from './../Titles/Titles'

export default class Projects extends Component {
  render () {
    var titleText = 'PROJECTS'
    return (
        <div>
          <div className="project-title">
            <Titles titleText={titleText} />
          </div>
          <div className="projects-wrapper group">
            <div className="first-box">
              <div className="background-overlay">
                <div className="centered-text">
                  <h3>Application Development</h3>
                  <p>This is a todo text</p>
                </div>
              </div>
            </div>
            <div className="right-wrapper group">
              <div className="second-box">
                <div className="background-overlay">
                  <div className="centered-text">
                    <h3>Websites Design & Development</h3>
                    <p>This is a todo text</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="animation-box">
                  <h4>Responsive Designs</h4>
                  <div className="resp-animation">
                    <div className="resp-header">
                      <div className="mini-header"></div>
                      <div className="mini-menu">
                        <span className="mini-menu-bar"></span>
                        <span className="mini-menu-bar"></span>
                      </div>
                    </div>
                    <div className="resp-content"></div>
                    <div className="resp-content"></div>
                    <div className="resp-content"></div>
                    <div className="resp-content"></div>
                    <div className="resp-content"></div>
                  </div>
                </div>
                <div className="third-box">
                  <div className="background-overlay">
                    <div className="centered-text">
                      <h3>Resources Development</h3>
                      <p>This is a todo text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
