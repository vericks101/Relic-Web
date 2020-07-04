import React from '../../../node_modules/react';
import Button from '../../../node_modules/react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Nav } from 'react-bootstrap';
import SignUpForm from './SignUpForm';

// Links sign up UI with state changing functions.
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

// Modal portion of UI for sign up.
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
        <Button variant="outline-light" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpLink;