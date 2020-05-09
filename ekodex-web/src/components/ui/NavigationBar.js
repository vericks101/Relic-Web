import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LoginComponent from '../LoginComponent';
import '../../index.css';

export const NavigationBar = () => (
    <Navbar className="nav-background" collapseOnSelect expand="lg" sticky="top">
    <Navbar.Brand href="/">
        <img
            alt=""
            src={require("../../assets/ekodexlogo.png")}
            width="60"
            height="60"
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
)