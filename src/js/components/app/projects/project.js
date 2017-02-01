import React, {Component} from 'react'
import {Row, Col, Grid, Image, Thumbnail, Panel} from 'react-bootstrap'

export default class Project extends Component{
  render(){
    return(
      <Panel className='singleProject'>
        <Row>
          <Col md={6} sm={6}>
            <Image src={this.props.imageLink} className='projectImage' repsonsive></Image>
          </Col>
          <Col md={6} sm={6}>
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
            {this.props.github &&
              <div>
                <h4>Github:</h4>
                <a href={this.props.github}>{this.props.github}</a>
              </div>
            }
            <h4>Deployment:</h4>
            <a href={this.props.deployment}>{this.props.deployment}</a>
          </Col>
        </Row>
      </Panel>
    )
  }

}
