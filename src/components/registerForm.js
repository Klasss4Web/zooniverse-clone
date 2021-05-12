import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, Row, Col } from 'react-bootstrap';



const RegisterForm = ({styleReg}) => {

  const inputStyle = {
    width: "750px",
    height: "50px",
    padding: "10px",
    marginLeft: "10px"
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link style={styleReg} className="nav-font mr-5 my-3" onClick={handleShow}>
        REGISTER</Link>{' '}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="registration"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title><Link to="/sign-in">Sign In</Link></Modal.Title> */}
          <Row>
            <Col sm={6}>
              <Link to="/sign-in">Sign In</Link>
            </Col>
            <Col sm={6}>
              <Link style={{marginLeft: "380px"}} to="/register">Register</Link>
            </Col>
            
          </Row>
        </Modal.Header>
        <Modal.Body>
         <form>
           <label for="username" style={{marginLeft: "10px"}}>Username or Email aAddress</label><br/>
           <input style={inputStyle} type="text" name="username" id="username" /><br/><br/>
            <label for="password" style={{marginLeft: "10px"}}>Password</label><br/>
           <input style={inputStyle} type="text" name="password" id="password" /><br/><br/>
           <label for="c-password" style={{marginLeft: "10px"}}>Confirm Password</label><br/>
           <input style={inputStyle} type="text" name="c-password" id="c-password" /><br/><br/>
           <label for="email" style={{marginLeft: "10px"}}>Email</label><br/>
           <input style={inputStyle} type="text" name="email" id="email" /><br/><br/>
           <input type="checkbox" name="policy-check" /><small style={{color: "black"}}>You agree to our <a className="py-5" href="#">privacy polic</a></small><br/><br/>
          <Button style={{width: '750px'}} variant="primary" className="btn">Register</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default RegisterForm;