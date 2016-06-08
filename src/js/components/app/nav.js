import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'

export default class Navigation extends Component{
  render(){
    return(
      <div className='navbar'>
        <Navbar style={{backgroundColor: '#A33643'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Tony Luisi</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
              <LinkContainer to='about'><NavItem>About Me</NavItem></LinkContainer>
              <LinkContainer to='contact'><NavItem>Contact</NavItem></LinkContainer>
              <LinkContainer to='CV'><NavItem>CV</NavItem></LinkContainer>
              <LinkContainer to='projects'><NavItem>Projects</NavItem></LinkContainer>
              <LinkContainer to='skills'><NavItem>Skills</NavItem></LinkContainer>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
