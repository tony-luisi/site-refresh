import React, {Component} from 'react'
import Project from './projects/project'
import {Grid, Row, Col} from 'react-bootstrap'
import {projects} from '../../data/projects'

export default class Projects extends Component{
  render(){
    return(
      <Grid className="animated fadeIn">
        <Row>
          <Col md={12} sm={12}>
            <h1>Projects</h1>
            <p>A comprehensive list of projects can be found on my github page <a href='https://github.com/tony-luisi' target='_blank'>here</a></p>
          </Col>
        </Row>
        {projects.map(function(project, i){
          return <Project name={project.title} key={i} {...project} />
        })}
      </Grid>
    )
  }
}
