import React, {Component} from 'react'
import {Grid, Row, Col, Button, Image} from 'react-bootstrap'

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
              <h2>Education History</h2>
              <h3>Graduate of the Enspiral Dev Academy</h3>
              <h4>19 week intensive course in Javascript</h4>
              <h3>Conjoint Bachelor of Commerce / Science</h3>
              <h4>Accounting & Computer Science</h4>
              <h2>Professional Qualitifications</h2>
              <h3>Chartered Accountant (CA)</h3>
              <h4>NZ Institute of Chartered Accountants</h4>
              <h3>Certified Information Systems Auditor</h3>
              <h4>Information Systems Audit and Control Association</h4>
            </Col>
            <Col md={6}>
            <Image src="about_photo.jpg" className="animated fadeIn" thumbnail responsive/>

            </Col>
          </Row>
        </Grid>



      </div>
    )
  }

}
