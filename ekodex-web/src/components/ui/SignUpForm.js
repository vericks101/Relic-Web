import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik'
import * as yup from 'yup';
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function submitValues({ firstName, lastName, username, email, password, confirmPassword }) {
    console.log({ firstName, lastName, username, email, password, confirmPassword });
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

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitValues}
      initialValues={{
        firstName: '',
        lastName: '',
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
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;