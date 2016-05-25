import React, { Component } from 'react'
import Main from './app/main'
import Navigation from './app/nav'
import About from './app/about'
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
            <Main />
          </Row>
          <Row>
            <About />
          </Row>
        </Grid>


      </div>
    )
  }

}

export default App
