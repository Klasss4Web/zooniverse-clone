import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button }  from 'react-bootstrap';

import SignIn from '../components/signIn';

import logoZooniverse from  '../images/foot-zoon.png';

const BuildAProject = () => {
const style = {
  color: "red"
}

  return(
    <div className="hero-img">
      <img src={logoZooniverse} className="hero-logo" />
      <h2>Zooniverse Project Builder</h2>
      <p className="lab-desc">Anyone can build a Zooniverse project. Just upload your data and choose the tasks you want the volunteers to do. To find out more, read our <Link to="#">How to Build a Project documentation</Link>, or click the button below to get started.</p>
      <div className="row">
        <div className="col-md-6 text-right">
          <SignIn style={{color: "#ffffff", border: "none", background: "#00979d", padding: "15px 100px"}} /><br /><br /><br />
          <Link to="/projects" className="back-to-projects mr-2">Back To Projects</Link>
        </div>
        <div className="col-md-6 text-left" style={{borderLeft: "2px solid"}}>
          <h5>Quick Links</h5>
          <Link to="#"><small>Project Builder Help</small><br /></Link>
          <Link to="#"><small>Project Builder Policies</small><br /></Link>
          <Link to="#"><small>Best Practice Guide</small><br /></Link>
          <Link to="//#endregion"><small>Acknowledgement</small><br /></Link>
          <Link to="#"><small>Project Builder Guide</small><br /></Link>
          <Link to="#"><small>Glossary</small></Link>
        </div>
      </div>
      
    </div>
  )
}

export default BuildAProject;