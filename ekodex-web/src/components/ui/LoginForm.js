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

const submitLogin = async ({ username, password }) => {
    try {
        return await fetch('http://localhost:3001/api/user/login', 
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

const schema = yup.object({
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

function LoginForm(props) {
  const defaultLoginError = 'Sorry, it looks like something went wrong when attempting to login to your account. Please try to login again after some time.';

  const [showFailure, setShowFailure] = React.useState(false);
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

            if (loginResponse !== null) {
                if (loginResponse.status === 200) {
                    props.updateLoginState({username: values.username, password: values.password});
                    setShowFailure(false);
                } else {
                    setLoginFailureDesc(loginResponse.data.error);
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
          handleBlur,
          values,
          touched,
          isValid,
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
    </Styles>
  );
}

export default LoginForm;