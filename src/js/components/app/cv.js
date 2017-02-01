import React, {Component} from 'react'
import {Grid, Row, Col, Button, Image, Panel} from 'react-bootstrap'

export default class CV extends Component{
  render(){
    return (
      <Grid fluid>
        <Row>
          <Col md={12} sm={12}>
            <h1 className="animated fadeIn cv">
              <a href="https://drive.google.com/open?id=0B1IPq-XwsCRuRjFnWmx3cms5NUk" target="_blank">Full CV Click Here</a>
            </h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
