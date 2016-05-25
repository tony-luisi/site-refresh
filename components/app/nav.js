import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default class Navigation extends Component{
  render(){
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Tony Luisi</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>About Me</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>CV</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Blog</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
