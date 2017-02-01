import React, { Component } from 'react'
import Navigation from './app/nav'
import {Grid, Row, Col} from 'react-bootstrap'

import Projects from './app/projects'
import CV from './app/cv'
import Main from './app/main'

class App extends Component {
  render () {
    return (
      <Grid fluid>
        <Row>
          <Main />
          <CV />
          <Projects />
        </Row>
      </Grid>
    )
  }
}

export default App
