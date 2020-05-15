import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik'
import * as yup from 'yup';
import Col from 'react-bootstrap/Col'
import { Button, Alert, Spinner } from 'react-bootstrap'
import styled from '../../node_modules/styled-components';

const Styles = styled.div`
    .btn-primary {
      margin-bottom: 7px;
    }

    .spinner-border {
      position: absolute;
      margin: 8px 0px 1px 1px;
    }

    .resetForm {
      margin: 0 auto;
      color: white !important;
      font-family: "VCR_OSD_MONO_1.001";
    }

    .btn {
      font-family: "VCR_OSD_MONO_1.001";
    }

    .spinner-border {
      position: absolute;
      margin: 8px 0px 1px 1px;
      color: white;
    }
`;

const submitResetPassword = async ({ username, password }) => {
    try {
        return await fetch('https://ekodex-server.herokuapp.com/api/resetPasswordViaUsername', 
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
                console.log("Password was reset successfully!");
            }
            return response;
        }).catch(function(error) {
            console.log(error);
            console.log("Password was not reset successfully.");
            return null;
        }))
    } catch(error) {
        return null;
    }
}

const alphanumericRegex = '^[a-zA-Z0-9]+$';

const resetPasswordSchema = yup.object({
  password: yup.string()
    .required('Password is a required field. ')
    // eslint-disable-next-line
    .min(8, "Must be at least ${min} characters.")
    .matches(alphanumericRegex, 'May only contain alphanumeric characters. ')
});

function ResetPasswordForm(props) {
  const defaultResetError = 'Sorry, it looks like something went wrong when attempting to reset your password. Please try again after some time.';

  const [showFailure, setShowFailure] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hideLoading, setHideLoading] = React.useState(true);
  const [resetFailureDesc, setResetFailureDesc] = React.useState(defaultResetError);

  return (
    <Styles>
      <Formik
        validationSchema={resetPasswordSchema}
        onSubmit={
          async (values) => {
            setHideLoading(false);
            let resetPasswordResponse = await submitResetPassword({username: props.username, password: values.password});
            setResetFailureDesc(defaultResetError);
            setShowFailure(false);
            setShowSuccess(false);

            if (resetPasswordResponse !== null) {
                if (resetPasswordResponse.status === 200) {
                    setShowFailure(false);
                    setShowSuccess(true);
                } else {
                    setResetFailureDesc(resetPasswordResponse.data.error);
                    setShowFailure(true);
                    setShowSuccess(false);
                }
            } else {
                setShowFailure(true);
                setShowSuccess(false);
            }
            setHideLoading(true);
          }
        }
        initialValues={{
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
          <Form className="text-center" noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} className="resetForm" md="4" controlId="validationFormik01">
                <Form.Label>New Password</Form.Label>
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
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible show={showSuccess}>
            <Alert.Heading>Success! Password reset!</Alert.Heading>
              <p>
                Your password has been successfully reset. You can now attempt to login with your new password.
              </p>
            </Alert>
            <Alert variant="danger" onClose={() => setShowFailure(false)} dismissible show={showFailure}>
            <Alert.Heading>Oh snap! Password reset failed!</Alert.Heading>
              <p>
                {resetFailureDesc}
              </p>
            </Alert>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default ResetPasswordForm;