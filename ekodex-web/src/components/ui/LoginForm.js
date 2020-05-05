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
      margin: 8px 0px 1px 1px;
    }
`;

const submitLogin = async ({ email, password }) => {
    try {
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

const schema = yup.object({
  email: yup.string()
    .required('Email is a required field.')
    .email('Email must be valid.'),
  password: yup.string()
    .required('Password is a required field. ')
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
});

function LoginForm(props) {
  const defaultLoginError = 'Sorry, it looks like something went wrong when attempting to login to your account. Please try to login again after some time.';

  const [showFailure, setShowFailure] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);
  const [loginFailureDesc, setLoginFailureDesc] = React.useState(defaultLoginError);

  return (
    <Styles>
      <Formik
        validationSchema={schema}
        onSubmit={
          async (values) => {
            setHideLoading(false);
            let loginResponse = await submitLogin(values);
            setLoginFailureDesc(defaultLoginError);
            setShowFailure(false);
            setShowSuccess(false);

            if (loginResponse !== null) {
                if (loginResponse.status === 200) {
                    props.updateLoginState({email: values.email, password: values.password});
                    setShowSuccess(true);
                    setShowFailure(false);
                } else {
                    setLoginFailureDesc(loginResponse.data.error);
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
          email: '',
          password: ''
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
            <Button variant="outline-light" type="submit">Submit form</Button>
            <Spinner animation="border" hidden={hideLoading}/>
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible show={showSuccess}>
            <Alert.Heading>Success! You are now logged in!</Alert.Heading>
              <p>
                Your account has been successfully Logged in.
              </p>
            </Alert>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Login failed!</Alert.Heading>
              <p>
                {loginFailureDesc}
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default LoginForm;