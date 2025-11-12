import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// Main Navbar component
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-dark">
      <Container className="navbar-container">
        {/* Logo */}
        {/* Navbar toggle for mobile */}
        <Navbar.Toggle
          aria-controls="main-nav"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />

        {/* Navbar links and contact button */}
        <Navbar.Collapse
          id="main-nav"
          className="collapse navbar-collapse justify-content-end align-center"
        >
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
    <Navbar.Brand href="#home">
      <img src="/images/logo/logo.png" alt="Logo" className="logo-img" />
    </Navbar.Brand>
  );
};

// Navigation links component
const NavLinks = () => {
  return (
    <Nav className="nav__links">
      <Nav.Link href="#">
        <span>Home</span>
      </Nav.Link>
      <Nav.Link href="#hero">
        <span>About</span>
      </Nav.Link>
      <Nav.Link href="#projects">
        <span>Projects</span>
      </Nav.Link>
      {/* <Nav.Link href="#contact"><span>Contact</span></Nav.Link> */}
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
