import React, { Component } from 'react'
import Main from './app/main'
import Navigation from './app/nav'
import {Grid, Row, Col} from 'react-bootstrap'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <Navigation />
        <Grid>
          <Row>
            <h1>Tony Luisi</h1>
            <h2>Web Developer</h2>
          </Row>
          <Row>

            {this.props.children}
          </Row>
        </Grid>


      </div>
    )
  }

}

export default App
