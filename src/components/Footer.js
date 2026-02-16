import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../css/Footer.css";

const FooterComponent = () => {
  return <Footer />;
};
export default FooterComponent;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-row">
          {/* <FooterLogo /> */}
          <FooterLinks />
          <FooterSocialLinks />
          {/* <FooterAppLinks /> */}
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

const FooterLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (hash, e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
    }

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const links = [
    { name: "Home", hash: "home" },
    { name: "Gallery", hash: "gallery" },
    { name: "Projects", hash: "projects" },
    { name: "Contact us", hash: "form-section" },
  ];

  return (
    <div
      className="footer-col col-one"
      data-aos-delay="100"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h4>Sitemap</h4>
      <ul className="footer-links site-map">
        {links.map((link) => (
          <li key={link.name}>
            {link.email ? (
              <Nav.Link
                href={`mailto:${link.email}`}
                className="footer-nav-link"
              >
                {link.name}
              </Nav.Link>
            ) : (
              <Nav.Link
                href={`#${link.hash}`}
                onClick={(e) => handleScrollTo(link.hash, e)}
                className="footer-nav-link"
              >
                {link.name}
              </Nav.Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterSocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "logo-facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: "logo-instagram",
      url: "https://www.instagram.com",
    },
    {
      name: "Twitter (X)",
      icon: "logo-twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "Telegram",
      icon: "navigate-circle-outline",
      url: "https://web.telegram.org/a/",
    },
  ];

  return (
    <div
      className="footer-col col-two"
      data-aos-delay="100"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <h4>Follow me</h4>
      <ul className="footer-links social-links">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              className="footer-social-link"
              target="_blank"
              rel="noreferrer"
              href={link.url}
            >
              <ion-icon name={link.icon}></ion-icon>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterBottom = () => {
  useEffect(() => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <div className="footer__bottom">
      <p>
        &copy; <span id="current-year"></span> Michael Adeleye. All rights
        reserved.
      </p>

      <p>
        <a target="_blank" href="/terms-and-conditions">
          Terms &amp; Conditions
        </a>
      </p>

      <p>
        <a target="_blank" href="/privacy-policy">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};
