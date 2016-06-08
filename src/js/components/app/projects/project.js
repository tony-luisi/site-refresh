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
          <Col md={6}>
            <Image src={this.props.imageLink} responsive></Image>
          </Col>
          <Col md={6}>
            <h3>{this.props.name}</h3>
            <h4>Description:</h4>
            <p>{this.props.description}</p>
            <h4>Project Type:</h4>
            <p>{this.props.projectType}</p>
            <h4>Technologies:</h4>
            <ul>{this.props.technologies.map(function(technology){
              return (
                <li>
                  {technology}
                </li>
              )
            })}</ul>
            <h4>Github:</h4>
            <p>{this.props.github}</p>
            <h4>Deployment:</h4>
            <p>{this.props.deployment}</p>
          </Col>
        </Col>
      </div>
    )
  }

}
