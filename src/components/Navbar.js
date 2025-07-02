import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarBox/>
    </nav>
  );
};

const NavbarBox = () => {
  return (
    <div className="navbar__box">
      <NavLinks/>
      <div className="btn btn-link nav__btn">
        <a href="mailto:michaeladeleye365@gmail.com">Contact me</a>
      </div>
    </div>
  )
};

const Logo = () => {
  return (
    <div className="logo">
      <a href="#">
        <img src="/images/logo/logo.png" alt="" />
      </a>
    </div>
  )
};

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#hero">About me</a></li>
      <li><a href="#projects">My Work</a></li>
    </ul>
  )
};

export default Navbar;