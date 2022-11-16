import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">William Shaner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="align-right">
            <Nav.Link className="text-dark" href="#myWork">
              My Work
            </Nav.Link>
            <Nav.Link className="text-dark" href="#skills">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-dark" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
