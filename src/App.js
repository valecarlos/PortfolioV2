import React, { Component } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Hero />
        <Projects />
        <About />
        <Footer />
        <Sidebar />
      </div>
    )
  }
}

export default App;
