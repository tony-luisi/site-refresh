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

  generatePanel(route, text) {
    return (
      <LinkContainer to={route}>
        <Col sm={6} fluid>
          <div bsStyle="primary" className="animated fadeIn mainPage">{text}</div>
        </Col>
      </LinkContainer>
    )
  }

  render(){
    const optionContent = this.state.optionShow ? (
      <div className="main-content">
        {this.generatePanel('about', 'About me')}
        {this.generatePanel('contact', 'Contact')}
        {this.generatePanel('CV', 'CV')}
        {this.generatePanel('projects', 'Projects')}
        {this.generatePanel('skills', 'Skills')}
      </div>
    ) : <div></div>

    return (
      <Grid>
        <Row>
          <Col md={12} sm={12}>
              <h3 className="typing-box">
                <Typist onTypingDone={this.typingEnded.bind(this)} cursor={{show: true, blink: true, hideWhenDone: false}}>
                  Kia Ora, I'm Tony
                  <br /><br />
                  Full Stack Developer, Chartered Accountant, Information Systems Auditor
                </Typist>
              </h3>
              <br /><br />
              {optionContent}
          </Col>
        </Row>
      </Grid>
    )
  }
}
