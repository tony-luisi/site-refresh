import React, {Component} from 'react'
import Project from './projects/project'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Projects extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col>
            <h1>Projects</h1>
            <p>A comprehensive list of projects can be found on my github page <a href='https://github.com/tony-luisi' target='_blank'>here</a></p>
          </Col>
        </Row>
        <Row>
          <Project name="on fleek"/>
          <Project name="ki mai"/>
          <Project name="conways"/>
        </Row>
        <br />
        <Row>
          <Project name="pokemon card game"/>
        </Row>
      </Grid>
    )
  }
}
