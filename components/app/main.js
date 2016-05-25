import React, {Component} from 'react'
import About from './main/about'
import Contact from './main/contact'

export default class Main extends Component{
  render(){
    return (
      <div>
        <h1>Main</h1>
        <About />
        <Contact />
      </div>
    )
  }
}
