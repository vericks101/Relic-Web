import React from '../../../node_modules/react';
import Button from '../../../node_modules/react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Nav } from 'react-bootstrap';
import SignUpForm from './SignUpForm';

function SignUpLink() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Nav.Link eventKey="1" onClick={() => setModalShow(true)}>
          Sign Up
        </Nav.Link>
  
        <SignUpModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

function SignUpModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default SignUpLink;