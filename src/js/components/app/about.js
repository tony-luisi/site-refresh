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
                  <h3>Graduate of the Enspiral Dev Academy</h3>
                  <h4>19 week intensive course in Javascript</h4>
                  <h3>Conjoint Bachelor of Commerce / Science</h3>
                  <h4>Accounting & Computer Science</h4>
                </Panel>
                <Panel header="Professional Qualifications" eventKey="2">
                  <h3>Chartered Accountant (CA)</h3>
                  <h4>NZ Institute of Chartered Accountants</h4>
                  <h3>Certified Information Systems Auditor</h3>
                  <h4>Information Systems Audit and Control Association</h4>
                </Panel>
                <Panel header="Work History" eventKey="3">
                  <h3>February 2008 to November 2015</h3>
                  <h4>Manager - PricewaterhouseCoopers(PwC)</h4>
                  <h3>February 2006 to December 2007</h3>
                  <h4>Computer Science Lab Tutor - UoA</h4>
                  <h4>Maori and Pasifika Liaison in Computer Science - UoA</h4>
                  <h3>February 2002 to February 2005</h3>
                  <h4>Shift Manager - McDonald's St Luke's</h4>
                </Panel>
                <Panel header="Interests" eventKey="4">
                  <h3>Piano and Guitar</h3>
                  <h3>Video Production</h3>
                  <h3>Gaming (PC and Console)</h3>
                  <h3>Aviation</h3>
                  <h3>Science Fiction</h3>
                  <h3>Free Diving</h3>
                </Panel>
              </Accordion>
            </Col>
            <Col md={6}>
            <Image src="images/about_photo.jpg" className="animated fadeIn" thumbnail responsive/>

            </Col>
          </Row>
        </Grid>



      </div>
    )
  }

}
