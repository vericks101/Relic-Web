import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { loginUser, logoutUser } from '../actions/authActions';
import LoginLink from './ui/LoginModal';
import SignUpLink from './ui/SignUpModal';
import { Nav, NavDropdown } from 'react-bootstrap';

class LoginComponent extends Component {

    updateToLoggedInState = (loginData) => {
        this.props.loginUser(loginData);
    }

    updateToLoggedOutState = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                {this.props.isLoggedIn ? 
                    <Nav>
                        <NavDropdown title="My Account" id="nav-dropdown">
                            <NavDropdown.Item className="foobar" onClick={this.updateToLoggedOutState}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> : 
                    <Nav activeKey="/do">
                        <SignUpLink/>
                        <LoginLink updateLoginState={this.updateToLoggedInState}/>
                    </Nav>
                }
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

export default connect(mapStateToProps, { loginUser, logoutUser })(LoginComponent);