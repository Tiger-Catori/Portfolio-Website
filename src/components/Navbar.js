import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  return <NavbarSection />;
};

export default NavbarComponent;

const NavbarSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on resize up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar navbar-dark nav__bar ${
        isSticky ? "navbar--sticky" : ""
      }`}
    >
      <Container className="nav__section">
        {/* <Logo />*/}
        <NavLinks isOpen={isMenuOpen} />
        <NavbarHamburger
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </Container>
    </Navbar>
  );
};

// Logo Component
// const Logo = () => {
//   const handleClick = () => {
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 0);
//   };

//   return (
//     <Navbar.Brand
//       as={Link}
//       to="/"
//       className="logo__img-container"
//       onClick={handleClick}
//     >
//       <img src="/images/general/logo.webp" alt="Logo" className="logo__img" />
//     </Navbar.Brand>
//   );
// };

// Nav links

const NavLinks = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (hash) => {
    if (location.pathname === "/") {
      // Already on Home page
      navigate({ pathname: "/", hash: `#${hash}` }, { replace: false });
      // Then manually scroll (with small delay) to ensure element exists
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      // Navigate to home and include hash
      navigate({ pathname: "/", hash: `#${hash}` }, { replace: false });
      // Then scroll after a small delay
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <Nav className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
      <Nav.Link
        as={Link}
        className="nav__link"
        to="/"
        onClick={() => handleClick("home")}
      >
        <span>Home</span>
      </Nav.Link>

      <Nav.Link
        as={Link}
        className="nav__link"
        to="/"
        onClick={() => handleClick("gallery")}
      >
        <span>Gallery</span>
      </Nav.Link>
      <Nav.Link
        as={Link}
        className="nav__link"
        to="/"
        onClick={() => handleClick("projects")}
      >
        <span>Projects</span>
      </Nav.Link>
      <Nav.Link
        as={Link}
        className="nav__link"
        to="/"
        onClick={() => handleClick("form-section")}
      >
        <span>Form</span>
      </Nav.Link>
    </Nav>
  );
};

// Navbar Hamburger
const NavbarHamburger = ({ isOpen, onClick }) => {
  return (
    <div className={`menu ${isOpen ? "menu--open" : ""}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

// Contact button component
// const ContactButton = () => {
//   return (
//     <div className="btn-contact">
//       <a href="mailto:michaeladeleye365@gmail.com">Contact me</a>
//     </div>
//   );
// };
