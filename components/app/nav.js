import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'

export default class Navigation extends Component{
  render(){
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Tony Luisi</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem><Link to='about'>About Me</Link></NavItem>
            <NavItem><Link to='contact'>Contact</Link></NavItem>
            <NavItem>CV</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Blog</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
