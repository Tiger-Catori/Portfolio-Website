import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarBox/>
    </nav>
  );
};

const NavbarBox = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:michaeladeleye365@gmail.com';
  };
  
  return (
    <div className="navbar__box">
      {/* <Logo/> */}
      <NavLinks/>
      <button className="btn nav__btn" onClick={handleButtonClick}>Contact me</button>
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
      {/* <li><a href="#contact">Contact me</a></li> */}
    </ul>
  )
};

export default Navbar;

