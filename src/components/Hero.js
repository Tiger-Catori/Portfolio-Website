import React from "react";

const Hero = () => {
  return (
    <section className="section__hero" id="hero">
      <div className="hero-container">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
};

const HeroText = () => {
  return (
    <div className="hero__text">
      <h2 className="heading hero_head">
        Welcome to <span>Michael Adeleye's</span> Website
      </h2>
      <p className="hero__p">
        A lifelong learner in the ever-evolving tech landscape, I thrive on
        transforming ideas into functional reality using modern tools like React
        and Python while leveraging cutting-edge practices.
      </p>
      <div className="hero__btn hero__btn-link">
        <a href="mailto:michaeladeleye365@gmail.com">Contact me</a>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero__image">
      <div className="container__img michael__img">
        <img
          className="hero__img"
          src="/images/michael/michael-hero.webp"
          alt="Michael Adeleye"
        />
      </div>
    </div>
  );
};

export default Hero;
