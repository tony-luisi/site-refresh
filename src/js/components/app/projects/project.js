import React, {Component} from 'react'
import {Row, Col, Grid, Image, Thumbnail} from 'react-bootstrap'

export default class Project extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Col md={6}>
          <Thumbnail src='http://placehold.it/450x150'>
            <Row>
              <Col md={6}>
                <p>{this.props.name}</p>
              </Col>
              <Col md={6}>
                <p>{this.props.name}</p>
              </Col>
            </Row>

          </Thumbnail>
        </Col>
      </div>
    )
  }

}
