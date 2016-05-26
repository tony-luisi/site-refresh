import React, {Component} from 'react'

export default class Project extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        This is project {this.props.name}
      </div>
    )
  }

}
