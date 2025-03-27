import React from "react";
import { useState, useEffect, useRef } from "react";
import "./projects.scss";
import Button from "../button/Button.jsx";

function Projects() {
  const [progress, setProgress] = useState(100); // Full width at start
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;
      const section = projectsRef.current;
      
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress based on how far we scrolled inside the section
      let scrollProgress = ((scrollTop - sectionTop + windowHeight) / sectionHeight) * 100;
      scrollProgress = Math.max(0, Math.min(scrollProgress, 100)); // Keep within bounds

      setProgress(100 - scrollProgress); // Shrinks as user scrolls
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const projects = [
    {
      id: 1,
      imgsrc: "/src/assets/img/work/Vue_drink_api500x500.png",
      link: "https://drink-api-login.netlify.app/",
      imgalt: "Vue API SPA",
      title: "Vue Framework Project - API",
      description: "SPA Vue.js framework project with API calls. 2023",
      buttonlabel: "Vue.js Project outside link",
    },
    {
      id: 2,
      imgsrc: "/src/assets/img/work/Vue_drink_api500x500.png",
      link: "https://drink-api-login.netlify.app/",
      imgalt: "Vue API SPA",
      title: "Vue Framework Project - API",
      description: "SPA Vue.js framework project with API calls. 2023",
      buttonlabel: "Vue.js Project outside link",
    },
    {
      id: 3,
      imgsrc: "/src/assets/img/work/Vue_drink_api500x500.png",
      link: "https://drink-api-login.netlify.app/",
      imgalt: "Vue API SPA",
      title: "Vue Framework Project - API",
      description: "SPA Vue.js framework project with API calls. 2023",
      buttonlabel: "Vue.js Project outside link",
    },
  ];

  const Single = ({ project }) => {
    return (
      <div className="project__container">
        <div className="project__card">
          <div className="card__imgwrapper">
            <img
              className="card__img"
              src={project.imgsrc}
              alt={project.imgalt}
              loading="lazy"
            />
          </div>
          <div className="card__description">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__text">{project.description}</p>
            <Button
              href={project.link}
              className="project__button"
              aria-label={project.buttonlabel}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects__section mt-header" id="Projects" ref={projectsRef}>
      <div className="container__title sticky" aria-label="projects title">
        <h2 className="title__heading eng" lang="en">
          Projects
        </h2>
        <p className="title__subtitle eng" lang="en">
          Websites and Featured Works
        </p>
        <div className="title__progressbar" style={{ width: `${progress}%` }}></div>
      </div>

      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </section>
  );
}

export default Projects;
