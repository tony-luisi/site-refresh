import React, {Component} from 'react'
import Typist from 'react-typist'
import {Grid, Row, Col, Button, Image, Panel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


export default class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      optionShow: false
    }
  }

  typingEnded(){
    this.setState({optionShow:true})
  }



  render(){
    const optionContent = this.state.optionShow ? (
      <div className="main-content">
        <LinkContainer to="about">
          <Button bsStyle="primary" className="animated fadeIn">About Me</Button>
        </LinkContainer>
        {' '}
        <LinkContainer to="contact">
          <Button bsStyle="primary" className="animated fadeIn">Contact</Button>
        </LinkContainer>
        {' '}
        <LinkContainer to="CV">
          <Button bsStyle="primary" className="animated fadeIn">CV</Button>
        </LinkContainer>
        {' '}
        <LinkContainer to="projects">
          <Button bsStyle="primary" className="animated fadeIn">Projects</Button>
        </LinkContainer>
        {' '}
        <LinkContainer to="skills">
          <Button bsStyle="primary" className="animated fadeIn">Skills</Button>
        </LinkContainer>
      </div>
    ) : <div></div>

    return (
      <Grid>
        <Row>
          <Col md={6} sm={12}>
              <h1 className="typing-box">
                <Typist onTypingDone={this.typingEnded.bind(this)} cursor={{show: true, blink: true, hideWhenDone: true}}>
                  Kia Ora!
                  <br /><br />
                  I'm Tony Luisi
                  <br /><br />
                  Full Stack Developer
                  <br /><br />
                  Chartered Accountant
                  <br /><br />
                  Information Systems Auditor
                </Typist>
              </h1>
              <br /><br />
              {optionContent}
          </Col>
          <Col md={6} sm={0}>
            <Image ref="image" src="images/main_photo.jpg" className="animated fadeIn" responsive/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
