import React, { Component } from 'react'
import logo from '../../assets/img/CVLogo.svg'

export default class hero extends Component {
  constructor (props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove (e) {
    let myHero = document.querySelector('.hero-image')
    let movementStrength = 25
    let width = myHero.clientWidth
    let height = myHero.clientHeight
    let pageX = e.clientX - (width / 2)
    let pageY = e.clientY - (height / 2)

    let newX = ((pageX / width) * movementStrength * -1) - 25
    let newY = ((pageY / height) * movementStrength * -1) - 25
    myHero.style.backgroundPosition = newX + 'px ' + newY + 'px'
  }
  render () {
    return (
      <div className="hero-image">
        <div className="transparent-overlay" onMouseMove={this.handleMouseMove}>
          <div className="cvslogo">
            <img src={logo} alt="Carlos Valencia Logo"/>
          </div>
          <div className="intro-text">
            <h1 className="main-font-color">CARLOS VALENCIA</h1>
            <h4 className="second-font-color">FRONT END DEVELOPER</h4>
            <p className="second-font-color">STRIVING TO DELIVER TOP-QUALITY SOLUTIONS</p>
          </div>
        </div>
      </div>
    )
  }
}
