import React from "react";
import "../css/Banner.css";

const BannerComponent = () => {
  return <Banner />;
};

const Banner = () => {
  const bannerItems = [
    { id: 1, img: "gcp-logo.webp", alt: "Google Cloud Platform" },
    { id: 2, img: "react-logo.webp", alt: "React" },
    { id: 3, img: "kotlin-logo.webp", alt: "Kotlin" },
    { id: 4, img: "mongodb-logo.webp", alt: "MongoDB" },
    { id: 5, img: "js-logo.webp", alt: "Javascript" },
    { id: 6, img: "python-logo.webp", alt: "Python" },
  ];

  return (
    <section className="section__banner">
      <div className="banner__track">
        <div className="banner__items">
          {bannerItems.map((item) => (
            <img
              key={`a-${item.id}`}
              src={`/images/logo/TechStackLogos/${item.img}`}
              alt={item.alt}
              className="banner__img"
            />
          ))}
        </div>
        <div className="banner__items">
          {bannerItems.map((item) => (
            <img
              key={`b-${item.id}`}
              src={`/images/logo/TechStackLogos/${item.img}`}
              alt={item.alt}
              className="banner__img"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
