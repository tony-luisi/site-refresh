import React, { Component } from 'react'
import About from './app/about'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <h1>{this.props.name} - Web Developer</h1>
        <About />
      </div>
    )
  }

}

export default App
