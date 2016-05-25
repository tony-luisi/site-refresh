import React, {Component} from 'react'
import TypeWriter from 'react-typewriter'

export default class Main extends Component{
  render(){
    return (
      <div>
        <h1>Main</h1>
        <div className='type'>
          <TypeWriter typing={1}>
            <h1>Hello World!</h1>
            <h2>And welcome to my site</h2>
          </TypeWriter>
        </div>


      </div>
    )
  }
}
