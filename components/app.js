import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <h1>{this.props.name} - Web Developer</h1>
  }

}

export default App
