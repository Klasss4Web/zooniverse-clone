import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const SignIn = ({style}) => {

  const inputStyle = {
    width: "350px",
    height: "50px"
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={style} variant="outline-warning" className="btn-lg btn buttons-signUp mr-2" onClick={handleShow}>
        SIGN IN</Button>{' '}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{width: '400px', transform: 'translateX(120%)'}}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title><Link to="/sign-in">Sign In</Link></Modal.Title> */}
          <Row>
            <Col sm={6}>
              <Link to="/sign-in">Sign In</Link>
            </Col>
            <Col sm={6}>
              <Link style={{marginLeft: "150px"}} to="/register">Register</Link>
            </Col>            
          </Row>
        </Modal.Header>
        <Modal.Body>
         <form>
           <label for="username">Username or Email aAddress</label><br/>
           <input style={inputStyle} type="text" name="username" id="username" /><br/><br/>
            <label for="password">Password</label><br/>
           <input style={inputStyle} type="text" name="password" id="password" /><br/><br/>
           <a className="py-5" href="#">Forgot your Password?</a><br/><br/>
          <Button style={{width: '350px'}} variant="primary" className="btn">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default SignIn;