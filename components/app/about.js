import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class About extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="about">
        <h2>About Me</h2>
        <Button bsStyle='primary'>Press me</Button>
      </div>
    )
  }

}
