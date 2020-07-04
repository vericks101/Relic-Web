import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik'
import * as yup from 'yup';
import Col from 'react-bootstrap/Col'
import { Button, Alert, Spinner, Modal } from 'react-bootstrap'
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .btn-primary {
      margin-bottom: 7px;
    }

    .spinner-border {
      position: absolute;
      margin: 8px 0px 1px 1px;
    }
`;

// Used to submit a login request to the API service and get back login results.
const submitLogin = async ({ username, password }) => {
    try {
        return await fetch('https://ekodex-server.herokuapp.com/api/user/login', 
        {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
        }).then(response =>
            response.json().then(data => ({ 
                data: data, 
                status: response.status 
            })
        ).then(response => {
            return response;
        }).then(function(response) {
            if (response.status === 200) {
                console.log("Login was Successful! ");
            }
            return response;
        }).catch(function(error) {
            console.log(error);
            console.log("Login was not Successful.");
            return null;
        }))
    } catch(error) {
        return null;
    }
}

const alphanumericRegex = '^[a-zA-Z0-9]+$';

const loginSchema = yup.object({
  username: yup.string()
    .required('Username is a required field.')
    // eslint-disable-next-line
    .min(6, "Must be at least ${min} characters.")
    // eslint-disable-next-line
    .max(15, "Must be no more than ${max} characters.")
    .matches(alphanumericRegex, 'May only contain alphanumeric characters.'),
  password: yup.string()
    .required('Password is a required field. ')
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
});

// UI portion of login. Comes with form validation.
function LoginForm(props) {
  const defaultLoginError = 'Sorry, it looks like something went wrong when attempting to login to your account. Please try to login again after some time.';
  const verifiedLoginError = 'Sorry, you must verify your email before you can login to the account you\'ve created. Please check your inbox for a verification email.';

  const [showFailure, setShowFailure] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);
  const [loginFailureDesc, setLoginFailureDesc] = React.useState(defaultLoginError);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Styles>
      <Formik
        validationSchema={loginSchema}
        onSubmit={
          async (values) => {
            setHideLoading(false);
            let loginResponse = await submitLogin(values);
            setLoginFailureDesc(defaultLoginError);
            setShowFailure(false);

            if (loginResponse !== null) {
                if (loginResponse.status === 200 && loginResponse.data.verified) {
                    props.updateLoginState({username: values.username, password: values.password});
                    setShowFailure(false);
                } else {
                  console.log(loginResponse.data);
                    if (loginResponse.status === 200 && !loginResponse.data.verified) {
                      setLoginFailureDesc(verifiedLoginError);
                    } else {
                      setLoginFailureDesc(loginResponse.data.error);
                    }
                    setShowFailure(true);
                }
            } else {
                setShowFailure(true);
            }
            setHideLoading(true);
          }
        }
        initialValues={{
          username: '',
          password: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button variant="outline-light" type="submit">Submit</Button>
            <Button variant="outline-light" onClick={() => setModalShow(true)}>Forgot Username or Password</Button>
            <Spinner animation="border" hidden={hideLoading}/>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Login failed!</Alert.Heading>
              <p>
                {loginFailureDesc}
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
      <ForgotUsernameOrPasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Styles>
  );
}

// Used to send a forgot password or username request to API service and returns back success status.
const submitForgotUsernameOrPassword = async ({ email }) => {
  try {
      return await fetch('https://ekodex-server.herokuapp.com/api/forgotusernameorpassword', 
      {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email})
      }).then(response =>
          response.json().then(data => ({ 
              data: data, 
              status: response.status 
          })
      ).then(response => {
          return response;
      }).then(function(response) {
          if (response.status === 200) {
              console.log("Reset email sent! ");
          }
          return response;
      }).catch(function(error) {
          console.log(error);
          console.log("Reset email was not successfully sent.");
          return null;
      }))
  } catch(error) {
      return null;
  }
}

const forgotUsernameOrPasswordSchema = yup.object({
  email: yup.string()
    .required('Email is a required field.')
    .email('Email must be valid.')
});

// UI portion of forgot password or username. Comes with form validation.
function ForgotPasswordOrUsernameForm(props) {
  const defaultforgotPasswordOrUsernameError = 'Sorry, it looks like something went wrong when attempting to send a reset email. Please try again after some time.';

  const [showFailure, setShowFailure] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);
  const [forgotPasswordOrUsernameFailureDesc, setforgotPasswordOrUsernameFailureDesc] = React.useState(defaultforgotPasswordOrUsernameError);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Styles>
      <Formik
        validationSchema={forgotUsernameOrPasswordSchema}
        onSubmit={
          async (values) => {
            setHideLoading(false);
            let forgotUsernameOrPasswordResponse = await submitForgotUsernameOrPassword(values);
            setforgotPasswordOrUsernameFailureDesc(defaultforgotPasswordOrUsernameError);
            setShowFailure(false);
            setShowSuccess(false);

            if (forgotUsernameOrPasswordResponse !== null) {
                if (forgotUsernameOrPasswordResponse.status === 200) {
                  setShowSuccess(true);
                    setShowFailure(false);
                } else {
                  setforgotPasswordOrUsernameFailureDesc(forgotUsernameOrPasswordResponse.data.error);
                    setShowFailure(true);
                    setShowSuccess(false);
                }
            } else {
                setShowFailure(true);
            }
            setHideLoading(true);
          }
        }
        initialValues={{
          email: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button variant="outline-light" type="submit">Submit</Button>
            <Spinner animation="border" hidden={hideLoading}/>
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible show={showSuccess}>
            <Alert.Heading>Success! Reset email sent!</Alert.Heading>
              <p>
                An email has been sent to your inbox with your username and or instructions on how to reset your password.
              </p>
            </Alert>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Reset email failed to send!</Alert.Heading>
              <p>
                {forgotPasswordOrUsernameFailureDesc}
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
      <ForgotUsernameOrPasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Styles>
  );
}

// Modal for forgot username or password portion of UI.
function ForgotUsernameOrPasswordModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forgot Username or Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ForgotPasswordOrUsernameForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-light" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginForm;