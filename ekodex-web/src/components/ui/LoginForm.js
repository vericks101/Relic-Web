import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik'
import * as yup from 'yup';
import Col from 'react-bootstrap/Col'
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

const submitLogin = async ({ email, password }) => {
    return await fetch('http://localhost:3001/api/user/login', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
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
}

const alphanumericRegex = '^[a-zA-Z0-9]+$';

const schema = yup.object({
  email: yup.string()
    .required('Email is a required field.')
    .email('Email must be valid.'),
  password: yup.string()
    .required('Password is a required field. ')
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
});

function LoginForm() {
  const [showFailure, setShowFailure] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);

  return (
    <Styles>
      <Formik
        validationSchema={schema}
        onSubmit={
          async (values) => {
            if (await submitLogin(values)) {
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
          email: 'test123@gmail.com',
          password: 'test123'
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
              <Form.Group as={Col} md="6" controlId="validationFormik04">
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
            <Button type="submit" onClick={() => setHideLoading(false)}>Submit form</Button>
            <Spinner animation="border" hidden={hideLoading}/>
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible show={showSuccess}>
            <Alert.Heading>Success! You are now logged in!</Alert.Heading>
              <p>
                Your account has been successfully Logged in. You may now proceed with what you want. 
              </p>
            </Alert>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Login failed!</Alert.Heading>
              <p>
                Sorry, it looks like something went wrong when attempting to login to your account.
                This is typically due to the email and or password you provided not matching. If not,
                please try to login again after some time.
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default LoginForm;