import React, {Component} from 'react'
import {Grid, Row, Col, Button, Image, Panel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



export default class Main extends Component{
  render(){
    return (
      <Grid classname="animated fadeIn">
        <Row>
          <Col md={12} sm={12}>
            <h1 className="title">
              Tony Luisi
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} className="image-parent">
            <Image ref="image" src="images/full.jpg" className="animated fadeIn image" responsive/>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <div className="about-me">
              <p>Kia Ora, I'm Tony.</p>
              <p>I love to buid software applications, learn new technologies, and inspire others through teaching.</p>
              <p>At the moment I freelance, building web software using React, Redux, Relay and Ruby on Rails (among others).</p>
              <p>I also teach students how to build web applications in 9 weeks at a coding bootcamp (Enspiral Dev Academy).</p>
              <p>I'm also a registered Chartered Accountant (CA) and Information Systems Auditor (CISA), with 8 years experience at a large accounting firm (PwC).</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <div className="subtitle">
              <h2>Full Stack Developer</h2>
              <h2>Chartered Accountant</h2>
              <h2>Information Systems Auditor</h2>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="subtitle">
              <h3><a href="mail:t.luisi@gmail.com">Email</a></h3>
              <h3><a href="https://github.com/tony-luisi">Github</a></h3>
              <h3>Phone: +64 21 278 8944</h3>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
