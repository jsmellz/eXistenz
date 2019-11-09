import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import connectionImage from '../assets/connection-image.png'

const Styles = styled.div`
    .navbar {
        background-color: black;
    }
    .navbar-brand, .navbar-nav .nav-link {
        &:hover {
            color: white;
        }
    } 
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand style={{color:"white"}}  href="/">eX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Item><Nav.Link style={{color:"white"}} href="/Connections">Account</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);