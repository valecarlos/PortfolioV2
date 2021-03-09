import React, { Component } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import GaScript from './utils/gaScript'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarVisible: false,
      voteCast: false,
      UnderConstructionVisible: false,
      isTouch: false // false until told otherwise
    }

    this.changeSideBarVisibility = this.changeSideBarVisibility.bind(this)
    this.changeCastState = this.changeCastState.bind(this)
    this.closeUnderConstruction = this.closeUnderConstruction.bind(this)
    this.touchStartHandler = this.touchStartHandler.bind(this)
  }
  componentWillMount () {
    if (process.env.NODE_ENV === 'production') { // run only if on build
      GaScript()
    } else if (process.env.NODE_ENV === 'development') {
      console.log('not logging to Googla analytics, this is the dev env')
    }
  }
  changeSideBarVisibility (isVisible) {
    this.setState({
      sidebarVisible: isVisible
    })
  }

  changeCastState () {
    this.setState({
      voteCast: true
    })
  }

  closeUnderConstruction () {
    this.setState({
      UnderConstructionVisible: false
    })
  }

  componentDidMount () {
    document.body.addEventListener('touchstart', this.touchStartHandler)
  }
  componentWillUnmount () {
    document.body.removeEventListener('touchstart', this.touchStartHandler)
  }
  touchStartHandler () {
    document.body.classList.add('touch-device')
    console.log('touch start')
    document.body.removeEventListener('touchstart', this.touchStartHandler) // stop listening to it
    this.setState({
      isTouch: true
    })
  }
  render () {
    return (
      <div className="App">
        {this.state.UnderConstructionVisible > 0 &&
          <UnderConstruction {...this.state} closeUnderConstruction={this.closeUnderConstruction}/>
      }
        <Hero {...this.state}/>
        {/* <Projects /> */}
        <About />
        <Footer />
        <Sidebar {...this.state} changeSideBarVisibility={this.changeSideBarVisibility} changeCastState={this.changeCastState}/>
      </div>
    )
  }
}

export default App;
