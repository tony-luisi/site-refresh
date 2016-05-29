import React, {Component} from 'react'
import {Row, Col, Grid, Image} from 'react-bootstrap'

export default class Project extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Col md={2}>
          <Image src='http://placehold.it/150x300'></Image>
        </Col>
        <Col md={2}>
          <h1>{this.props.name}</h1>
        </Col>
      </div>
    )
  }

}
