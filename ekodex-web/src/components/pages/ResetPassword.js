import React, { Component } from 'react';
import ResetPasswordComponent from '../ResetPasswordComponent';
import { Container } from 'react-bootstrap'
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .container {

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
    await fetch('http://localhost:3001/api/reset', {
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
        <div>
          <h4>Problem resetting password. Please send another reset link.</h4>
        </div>
      )
    } else if (isLoading) {
      return (
        <div>
          <h4>Loading user data...</h4>
        </div>
      )
    } else {
      return (
        <Styles>
          <Container>
          <ResetPasswordComponent username={username}/>
          </Container>
        </Styles>
      )
    }
  }
}