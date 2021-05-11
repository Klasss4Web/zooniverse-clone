import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import SignIn from './signIn'


const NavBar = () => {
  return (
    <>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="dark" className="main-navBar">
        <ReactBootstrap.Navbar.Brand className="nav-font" href="/">HOME</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link className="nav-font" href="/projects">PROJECTS</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link className="nav-font" href="/about">ABOUT</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link className="nav-font" href="/get-involved">GET INVOLVED</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link className="nav-font" href="/talk">TALK</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link className="nav-font" href="/lab">BUILD A PROJECT</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="NEWS" id="collasible-nav-dropdown" className="nav-font">
              <ReactBootstrap.NavDropdown.Item className="nav-font-dropdown" href="#action/3.1">DAILY ZOONIVERSE</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item className="nav-font-dropdown" href="#action/3.2">BLOG</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <SignIn style={{color: "white", border: "none", fontSize: "16px", fontFamily: "Roboto"}} />
            {/* <ReactBootstrap.Nav.Link className="nav-font" href="/sign-in">SIGN IN</ReactBootstrap.Nav.Link> */}
            <ReactBootstrap.Nav.Link className="nav-font" eventKey={2} href="#memes">
              REGISTER
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  )
}


export default NavBar;