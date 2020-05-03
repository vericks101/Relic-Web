import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { loginUser } from '../actions/authActions';
import LoginLink from './ui/LoginModal';
import Button from 'react-bootstrap/Button';
import SignUpLink from './ui/SignUpModal';
import { Nav } from 'react-bootstrap';

class LoginComponent extends Component {

    updateLoginState = (loginData) => {
        this.props.loginUser(loginData);
    }

    render() {
        return (
            <div>
                {this.props.isLoggedIn ? <><Button>Logout</Button></> : <Nav><SignUpLink/><LoginLink updateLoginState={this.updateLoginState} /></Nav>}
            </div>
        );
    }
}

LoginComponent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    authToken: PropTypes.string
};

const mapStateToProps = state => ({
    isLoggedIn: state.loginStatus.isLoggedIn
});

export default connect(mapStateToProps, { loginUser })(LoginComponent);