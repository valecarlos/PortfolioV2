import React, { Component } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarVisible: false,
      voteCast: false
    }

    this.changeSideBarVisibility = this.changeSideBarVisibility.bind(this)
    this.changeCastState = this.changeCastState.bind(this)
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
  render () {
    return (
      <div className="App">
        <Hero />
        <Projects />
        <About />
        <Footer />
        <Sidebar {...this.state} changeSideBarVisibility={this.changeSideBarVisibility} changeCastState={this.changeCastState}/>
      </div>
    )
  }
}

export default App;
