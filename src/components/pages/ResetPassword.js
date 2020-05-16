import React, { Component } from 'react';
import ResetPasswordComponent from '../ResetPasswordComponent';
import { Container, Alert, Spinner } from 'react-bootstrap'
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .resetContainer {
      padding-top: 350px !important;
      padding-bottom: 350px !important;
    }

    .loadingContainer {
      padding-top: 350px !important;
      padding-bottom: 350px !important;
      text-align: center;
    }

    @media (min-width: 600px) {
      .alert {
        margin-left: 100px;
        margin-right: 100px;
        font-family: "VCR_OSD_MONO_1.001";
      }
    }

    .alert {
      font-family: "VCR_OSD_MONO_1.001";
    }
`;

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    await fetch('https://ekodex-server.herokuapp.com/api/reset', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ resetPasswordToken: this.props.match.params.token })
      }).then(response =>
          response.json().then(data => ({ 
              data: data, 
              status: response.status 
          })
      ).then(response => {
          if (response.status === 200) {
              console.log("Password reset link a-ok");
              this.setState({
                username: response.data.username,
                isLoading: false,
                error: false,
              });
          }
        }).catch(error => {
            console.log(error);
            console.log("There was an issue loading the reset password page.");
            this.setState({
              isLoading: false,
              error: true,
            });
      }))
  }

  render() {
    const { error, isLoading, username } = this.state;

    if (error) {
      return (
        <Styles>
          <Container className="resetContainer">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Failed to load Password Reset Page.</Alert.Heading>
              <p>
                There was an issue loading the password reset page or the reset link has expired. Please try to send
                another password reset link or reload the page after some time.
              </p>
            </Alert>
          </Container>
        </Styles>
      )
    } else if (isLoading) {
      return (
        <Styles>
          <Container className="loadingContainer">
            <Spinner animation="border" className="text-center"/>
          </Container>
        </Styles>
      )
    } else {
      return (
        <Styles>
          <Container className="resetContainer">
            <ResetPasswordComponent username={username}/>
          </Container>
        </Styles>
      )
    }
  }
}