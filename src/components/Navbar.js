import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Main Navbar component
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-dark">
      <Container>
        {/* <Logo /> */}
        {/* Navbar toggle for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navbar links and contact button */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto nav__buttons">
            <NavLinks />
            <ContactButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Logo component
const Logo = () => {
  return (
    <Navbar.Brand href="#">
      <img src="/images/logo/logo.png" alt="Logo" className="logo-img" />
    </Navbar.Brand>
  );
};

// Navigation links component
const NavLinks = () => {
  return (
    <Nav className="mr-auto nav__links">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#hero">About Me</Nav.Link>
      <Nav.Link href="#projects">My Work</Nav.Link>
    </Nav>
  );
};

// Contact button component
const ContactButton = () => {
  return (
    <div className="btn-contact">
      <a href="mailto:michaeladeleye365@gmail.com">Contact me</a>
    </div>
  );
};

export default NavbarComponent;
