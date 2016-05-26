import React, {Component} from 'react'
import Project from './projects/project'

export default class Projects extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Projects</h1>
        <p>A comprehensive list of projects can be found on my github page <a href='https://github.com/tony-luisi' target='_blank'>here</a></p>
        {/*<Project name="on fleek"/>*/}
      </div>
    )
  }
}
