import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import LoginComponent from '../LoginComponent';


const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link, .navbar-light .navbar-nav .nav-link.active {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>Ekodex</Navbar.Brand>
            <Navbar.Toggle area-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className = 'ml-auto'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
                    {/* <Nav.Item><SignUpLink/></Nav.Item> */}
                    {<Nav.Item><LoginComponent/></Nav.Item>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)