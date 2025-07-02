import React from 'react';

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:michaeladeleye365@gmail.com';
  };

  return (
    <section className="section__hero" id='hero'>
      <div className="hero-container">
        <HeroText onButtonClick={handleButtonClick} />
        <HeroImage />
      </div>
    </section>
  );
};

const HeroText = ({ onButtonClick }) => {
  return (
    <div className="hero__text">
      <h2 className="heading hero_head">
        Welcome to <span>Michael Adeleye's</span> Website
      </h2>
      <p className="hero__p">
        A lifelong learner in the ever-evolving tech landscape, I thrive on transforming ideas into functional reality using modern tools like React and Python while leveraging cutting-edge practices.
      </p>
      <button className="btn hero__btn"  onClick={onButtonClick}>Contact me</button>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero__image">
      <div className="container__img michael__img">
        <img className="hero__img" src="/images/michael/michael-hero.webp" alt="Michael Adeleye" />
      </div>
    </div>
  );
};

export default Hero;