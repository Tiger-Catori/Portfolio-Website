import React, { useEffect } from "react";
import "../css/footer.css";

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

const FooterLogo = () => {
  return (
    <div className="footer-col logo-footer">
      <img src="/images/logo/logo.png" alt="Fasco Logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Leo lectus posuere tellus auctor
        non ac in. Tristique feugiat senectus ultrices m
      </p>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="footer-col col-one">
      <h4>Sitemap</h4>
      <ul className="footer-links site-map">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#hero">About me</a>
        </li>
        <li>
          <a href="#projects">My work</a>
        </li>
        <li>
          <a href="mailto:michaeladeleye365@gmail.com" class="footer-link">
            Contact me
          </a>
        </li>

        {/* <li><a href="#download">Download App</a></li> */}
      </ul>
    </div>
  );
};

const FooterSocialLinks = () => {
  return (
    <div className="footer-col col-two">
      <h4>Follow me</h4>
      <ul className="footer-links social-links">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <ion-icon name="logo-facebook"></ion-icon>Facebook
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>Instagram
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
            <ion-icon name="logo-twitter"></ion-icon>Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.telegram.org/a/"
          >
            <ion-icon name="navigate-circle-outline"></ion-icon>Telegram
          </a>
        </li>
      </ul>
    </div>
  );
};

const FooterAppLinks = () => {
  return (
    <div className="footer-col col-three">
      <h4>DOWNLOAD THE APP</h4>
      <div className="app-buttons">
        <a href="#google-play">
          <img src="/images/general/googleplay.webp" alt="Google Play" />
        </a>
        <a href="#app-store">
          <img src="/images/general/appstore.webp" alt="App Store" />
        </a>
      </div>
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
        &copy; <span id="current-year"></span> Help4Landlords. All rights
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
