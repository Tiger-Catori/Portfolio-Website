import React from "react";
import "../css/Projects.css";

const ProjectsComponent = () => {
  return <Projects />;
};
export default ProjectsComponent;

const Projects = () => {
  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--project">My Projects</h2>
      <p className="section__subtitle section__subtitle--project">
        Clicking on any of these images will redirect you to my GitHub page
      </p>

      <Portfolio />
    </section>
  );
};

const Portfolio = () => {
  // Portfolio item data with image filenames
  const portfolioItems = [
    { id: 1, img: "portfolio-02.webp", alt: "Project 2 preview" },
    { id: 2, img: "portfolio-01.webp", alt: "Project 1 preview" },
    { id: 3, img: "portfolio-03.webp", alt: "Project 3 preview" },
    { id: 3, img: "portfolio-12.webp", alt: "Project 4 preview" },
  ];
  return (
    <div className="portfolio">
      {portfolioItems.map(({ id, img, alt }, index) => {
        const animation = index % 2 === 0 ? "fade-right" : "fade-left";

        return (
          <a
            key={id}
            href="https://github.com/Tiger-Catori"
            className="portfolio__item"
            aria-label={`View project ${id} on GitHub`}
            target="_blank"
            rel="noreferrer"
            data-aos={animation}
            data-aos-duration="1200"
            data-aos-easing="ease-out-quart"
            data-aos-delay="200"
          >
            <img
              src={`/images/work/${img}`}
              alt={alt}
              className="portfolio__img"
            />
          </a>
        );
      })}
    </div>
  );
};
