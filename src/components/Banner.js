import React from "react";

const Banner = () => {
  // Banner Item Data with image and filenames.
  const bannerItems = [
    { id: 1, img: "gcp-logo.webp", alt: "Google Cloud Platform" },
    // { id: 2, img: "html-css-logo.webp", alt: "HTML5 & CSS3" },
    { id: 2, img: "javascript-logo.webp", alt: "Javascript" },
    // { id: 3, img: "kotlin-logo.webp", alt: "Kotlin" },
    { id: 4, img: "mongodb-logo.webp", alt: "MongoDB" },
    { id: 5, img: "react-logo.webp", alt: "React" },
    { id: 6, img: "java-logo.webp", alt: "Java" },
    // { id: 7, img: "python-logo.webp", alt: "Python" },
  ];
  return (
    <section className="section__banner">
      <div className="banner__container">
        {/* <h2 className="section__title section__title--project">Banner</h2>*/}
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
