import React, {Component} from 'react'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'

export default class Skills extends Component{
  render(){
    return(
      <Grid>
        <Row>
          <PageHeader>Coding Skills <small>What I've Learnt</small></PageHeader>
        </Row>
        <Row>
          <Col md={6}>
            <h1>Javascript</h1>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>Tape / Mocha</li>
              <li>Handlebars /Jade</li>
              <li>Deployment (Heroku)</li>
            </ul>
          </Col>
          <Col md={6}>
            <h1>General</h1>
            <ul>
              <li>Git / Github</li>
              <li>Java</li>
              <li>.NET (C#)</li>
              <li>Ruby / Rails</li>
              <li>ELM / Functional Programming</li>
              <li>SQL / NoSQL (Postgres, MongoDB)</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}
