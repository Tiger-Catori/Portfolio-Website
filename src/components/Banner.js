import React from "react";
import "../css/banner.css";

const Banner = () => {
  // Banner Item Data with image and filenames.
  const bannerItems = [
    { id: 1, img: "gcp-logo.webp", alt: "Google Cloud Platform" },
    { id: 2, img: "react-logo.webp", alt: "React" },
    { id: 3, img: "kotlin-logo.webp", alt: "Kotlin" },
    { id: 4, img: "mongodb-logo.webp", alt: "MongoDB" },
    { id: 5, img: "js-logo.webp", alt: "Javascript" },
    // { id: 6, img: "java-logo.webp", alt: "Java" },
    { id: 6, img: "python-logo.webp", alt: "Python" },
  ];
  return (
    <section className="section__banner">
      <div className="banner__container">
        <div className="banner__items">
          {bannerItems.map((item) => (
            <img
              key={item.id}
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

export default Banner;
