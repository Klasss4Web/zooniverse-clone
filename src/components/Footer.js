import React from 'react';
import { Link } from 'react-router-dom';
import { Row,
  Col,
  Container } from 'react-bootstrap';

import logoZooniverse from  '../images/foot-zoon.png';


const Footer = () =>
{
  return(
    <footer>
      <Container fluid className="footer-container">
       <Row>
        <Col xs={6} md={4}>
          <img src={logoZooniverse} className="foot-logo" alt="zooniverse footer logo" />
        </Col>
        <Col xs={6} md={2}>
          <Link to="#"><small>Projects</small><br /></Link>
          <Link to="#"><small>Collections</small><br /></Link>
          <Link to="#"><small>Build A Projects</small><br /></Link>
          <Link to="#"><small>How To Build</small><br /></Link>
          <Link to="#"><small>Projects Policies</small><br /></Link>
          <Link to="#"><small>How To Build</small></Link>
        </Col>
        <Col xs={6} md={2}>
          <Link to="#"><small>About Us</small><br /></Link>
          <Link to="#"><small>Education</small><br /></Link>
          <Link to="#"><small>Our Team</small><br /></Link>
          <Link to="//#endregion"><small>Publications</small><br /></Link>
          <Link to="#"><small>Acknowledgements</small><br /></Link>
          <Link to="#"><small>Contact Us</small></Link>
        </Col>
        <Col xs={6} md={2}>
          <Link to="#"><small>Zooniverse Talk</small><br /></Link>
          <Link to="#"><small>Daily Zooniverse</small><br /></Link>
          <Link to="#"><small>Blog</small><br /></Link>
        </Col>
        <Col xs={6} md={2}>
          <div className="social-media-icons center">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-google-plus-g"></i>
          </div>
        </Col>
       </Row>
      </Container>
      <div className="bottom-footer">
        <small>Privacy Policy</small>
        <small>Jobs</small>
        <small>System Status</small>
        <small>Security</small>
      </div>
    </footer>
  )
}

export default Footer;