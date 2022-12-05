import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>William Shaner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="align-right">
            <NavLink className="text-dark" to="/">
              Home
            </NavLink>
            <NavLink className="text-dark" to="/projects">
              Projects
            </NavLink>
            <NavLink className="text-dark" to="/">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
