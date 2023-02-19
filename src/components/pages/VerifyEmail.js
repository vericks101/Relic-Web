import React, { Component } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap'
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .verifyContainer {
      padding-top: 350px !important;
      padding-bottom: 350px !important;
      font-family: "VCR_OSD_MONO_1.001" !important
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
      }
    }

    .alert {
      font-family: "VCR_OSD_MONO_1.001" !important
    }
`;

// Page component for email verification page.
export default class VerifyEmail extends Component {
  // On object creation, construct with default below state values.
  constructor() {
    super();

    this.state = {
      username: '',
      isLoading: true,
      error: false,
    };
  }

  // On component creation, verify with API service that token provided in email link is valid.
  async componentDidMount() {
    await fetch('https://Relic-server.herokuapp.com/api/verify', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ verificationToken: this.props.match.params.token })
      }).then(response =>
          response.json().then(data => ({ 
              data: data, 
              status: response.status 
          })
      ).then(response => {
          if (response.status === 200) {
              console.log("Verification link a-ok");
              this.setState({
                username: response.data.username,
                isLoading: false,
                error: false,
              });
          }
        }).catch(error => {
            console.log(error);
            console.log("There was an issue loading the email verification page.");
            this.setState({
              isLoading: false,
              error: true,
            });
      }))
  }

  // UI for component that is dictated by state of loading.
  render() {
    const { error, isLoading } = this.state;

    if (error) {
      return (
        <Styles>
          <Container className="verifyContainer">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Failed to load Email Verification Page.</Alert.Heading>
              <p>
                There was an issue loading the email verification page. Please try again after
                some time.
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
          <Container className="verifyContainer">
          <Alert variant="success" className="text-center">
            <Alert.Heading>Email Verification Successful!</Alert.Heading>
              <p>
                Your email has been verified. You can proceed to login to your account now.
              </p>
            </Alert>
          </Container>
        </Styles>
      )
    }
  }
}