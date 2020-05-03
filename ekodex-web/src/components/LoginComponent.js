import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { loginUser, logoutUser } from '../actions/authActions';
import LoginLink from './ui/LoginModal';
import SignUpLink from './ui/SignUpModal';
import { Nav, NavItem, Dropdown, NavLink } from 'react-bootstrap';

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
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>My Account</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.updateToLoggedOutState}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>;
                    </Nav> : 
                    <Nav>
                        <SignUpLink/><LoginLink updateLoginState={this.updateToLoggedInState}/>
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