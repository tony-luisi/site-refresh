import React, {Component} from 'react'
import {Grid, Row, Col, Button, Image, Accordion, Panel} from 'react-bootstrap'

export default class About extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="about animated fadeIn">
        <Grid>
          <Row>
            <Col md={6}>
              <h1>Tony Weston Luisi</h1>
              <Accordion>
                <Panel header="Education History" eventKey="1">
                  <h4>Graduate of the Enspiral Dev Academy</h4>
                  <h5>19 week intensive course in Javascript</h5>
                  <h4>Conjoint Bachelor of Commerce / Science</h4>
                  <h5>Accounting & Computer Science</h5>
                </Panel>
                <Panel header="Professional Qualifications" eventKey="2">
                  <h4>Chartered Accountant (CA)</h4>
                  <h5>NZ Institute of Chartered Accountants</h5>
                  <h4>Certified Information Systems Auditor</h4>
                  <h5>Information Systems Audit and Control Association</h5>
                </Panel>
                <Panel header="Work History" eventKey="3">
                  <h4>February 2008 to November 2015</h4>
                  <h5>Manager - PricewaterhouseCoopers(PwC)</h5>
                  <h4>February 2006 to December 2007</h4>
                  <h5>Computer Science Lab Tutor - UoA</h5>
                  <h5>Maori and Pasifika Liaison in Computer Science - UoA</h5>
                  <h4>February 2002 to February 2005</h4>
                  <h5>Shift Manager - McDonald's St Luke's</h5>
                </Panel>
                <Panel header="Interests" eventKey="4">
                  <h4>Piano and Guitar</h4>
                  <h4>Video Production</h4>
                  <h4>Gaming (PC and Console)</h4>
                  <h4>Aviation</h4>
                  <h4>Science Fiction</h4>
                  <h4>Free Diving</h4>
                </Panel>
              </Accordion>
            </Col>
            <Col md={5}>
              <Image src="images/about_photo.jpg" className="animated fadeIn" thumbnail responsive/>
            </Col>
          </Row>
        </Grid>



      </div>
    )
  }

}
