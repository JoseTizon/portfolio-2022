import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg" className='sticky-top'>
            <Container>
                <Navbar.Brand className='fs-1' href="/">Jose Tizon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-3">
                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#">Portfolio</Nav.Link>
                    <Nav.Link href="#">Contact Me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;