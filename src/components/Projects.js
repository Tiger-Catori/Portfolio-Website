import React from 'react';

const Projects = () => {
  // Portfolio item data with image filenames
    const portfolioItems = [
    { id: 1, img: "portfolio-02.webp", alt: "Project 2 preview" },
    { id: 2, img: "portfolio-01.webp", alt: "Project 1 preview" },
    { id: 3, img: "portfolio-03.webp", alt: "Project 3 preview" },
  ];

//   const portfolioItems = [
//     { id: 1, img: "portfolio-01.webp", alt: "Project 1 preview" },
//     { id: 2, img: "portfolio-02.webp", alt: "Project 2 preview" },
//     { id: 3, img: "portfolio-03.webp", alt: "Project 3 preview" },
//     { id: 4, img: "portfolio-02.webp", alt: "Project 4 preview" },
//     { id: 5, img: "portfolio-03.webp", alt: "Project 5 preview" },
//     { id: 6, img: "portfolio-01.webp", alt: "Project 6 preview" },
//     { id: 7, img: "portfolio-03.webp", alt: "Project 7 preview" },
//     { id: 8, img: "portfolio-01.webp", alt: "Project 8 preview" },
//     { id: 9, img: "portfolio-02.webp", alt: "Project 9 preview" },
//   ];


  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--project">My Projects</h2>
      <p className="section__subtitle section__subtitle--project">
        Clicking on any of these images will redirect you to my GitHub page
      </p>
      
      <div className="portfolio">
        {portfolioItems.map((item) => (
          <a
            key={item.id}
            href="https://github.com/Tiger-Catori"
            className="portfolio__item"
            aria-label={`View project ${item.id} on GitHub`}
            target="_blank" rel="noreferrer"
          >
            <img 
              src={`/images/work/${item.img}`} 
              alt={item.alt}
              className="portfolio__img" 
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;