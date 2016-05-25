import React, {Component} from 'react'
import {fadeIn} from './helper'

export default class contact extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fadeIn(this.refs.email)
  }

  render(){
    return (
      <div className="contact">
        <h3 ref='email'>Email</h3>
        <h3>Github</h3>
        <h3>Phone</h3>
      </div>
    )
  }
}
