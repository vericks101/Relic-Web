import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import LoginComponent from '../LoginComponent';
import '../../index.css';


const Styles = styled.div`
    .navLogo {
        margin-bottom: 5px;
    }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar className="nav-background" collapseOnSelect expand="lg" sticky="top">
    <Navbar.Brand href="/">
        <img
            alt=""
            src={require("../../assets/grey.jpg")}
            width="30"
            height="30"
            className="navLogo"
        />{' '}
        EKODEX
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Item><LoginComponent/></Nav.Item>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Styles>
)