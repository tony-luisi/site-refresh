import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class About extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="about">
        <h3>About Me</h3>
        <Button bsStyle='primary'>Press me</Button>
      </div>
    )
  }

}
