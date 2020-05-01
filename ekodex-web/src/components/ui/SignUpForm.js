import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik'
import * as yup from 'yup';
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .btn-primary {
      margin-bottom: 7px;
    }

    .spinner-border {
      position: absolute;
      margin: 3px;
    }
`;

const submitSignUp = async ({ firstName, lastName, username, email, password }) => {
    return await fetch('http://localhost:3001/api/user/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: firstName + ' ' + lastName, username: username, email: email, password: password})
    }).then(response =>
      response.json().then(data => ({ 
          data: data, 
          status: response.status 
      })
    ).then(response => {
        return response;
    }).then(function(response) {
        console.log(response);
        console.log("Login was Successful! ");
        return true;
    }).catch(function(error) {
        console.log("Login was not Successful.");
        return false;
    }))
};

const alphanumericRegex = '^[a-zA-Z0-9]+$';

const schema = yup.object({
  firstName: yup.string()
    .required(),
  lastName: yup.string()
    .required(),
  username: yup.string()
    .required('Username is a required field.')
    // eslint-disable-next-line
    .min(6, "Must be at least ${min} characters.")
    // eslint-disable-next-line
    .max(15, "Must be no more than ${max} characters.")
    .matches(alphanumericRegex, 'May only contain alphanumeric characters.'),
  email: yup.string()
    .required('Email is a required field.')
    .email('Email must be valid.'),
  password: yup.string()
    .required('Password is a required field. ')
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
    .oneOf([yup.ref('confirmPassword'), null], 'Passwords must match'),
  confirmPassword: yup.string()
    .required('Password is a required field. ')
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
});

function SignUpForm() {
  const [showFailure, setShowFailure] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);

  return (
    <Styles>
      <Formik
        validationSchema={schema}
        onSubmit={
          async (values) => {
            if (await submitSignUp(values)) {
              setShowSuccess(true);
              setShowFailure(false);
            } else {
              setShowFailure(true);
              setShowSuccess(false);
            }
            setHideLoading(true);
          }
        }
        initialValues={{
          firstName: 'Victor',
          lastName: 'Erickson',
          username: 'test123',
          email: 'test123@gmail.com',
          password: 'test123',
          confirmPassword: 'test123',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik03">
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
              <Form.Group as={Col} md="3" controlId="validationFormik04">
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
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit" onClick={() => setHideLoading(false)}>Submit form</Button>
            <Spinner animation="border" hidden={hideLoading}/>
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible show={showSuccess}>
            <Alert.Heading>Success! You are registered!</Alert.Heading>
              <p>
                Your account has been successfully registered. You can now login to your account. 
                Please proceed to the login screen to do so.
              </p>
            </Alert>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Something went wrong!</Alert.Heading>
              <p>
                Sorry, it looks like something went wrong when attempting to register your account.
                This is typically due to the email provided already being registered under another 
                account. Please ensure that there is no other account associated with the provided
                email or try again after some time.
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default SignUpForm;