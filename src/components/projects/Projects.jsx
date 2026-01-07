import React from "react";
import { useState, useEffect, useRef } from "react";
import "./projects.scss";
import Button from "../button/Button.jsx";
import vueimage from "/src/assets/img/work/vue_drink_api500x500.avif";
import volandoimage from "/src/assets/img/work/volando_art_500x500.jpg";
import chucknorrisimage from "/src/assets/img/work/chucknorris_api500x500.avif";
import hotelbrickimage from "/src/assets/img/work/hotelbrick_500x500.avif";
import TPVimage from "/src/assets/img/work/TPV_500x500.avif";
import portfolioimage from "/src/assets/img/work/portfolio_500x500.avif";
import banksystemimage from "/src/assets/img/work/bank_500x500.avif";
// import eshopimage from "/src/assets/img/work/eshop_500x500.avif";

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
    // {
    //   id: 8,
    //   imgsrc: eshopimage,
    //   link: "https://cacharreando.net/tibor/sistemabanco/",
    //   imgalt: "",
    //   title: "",
    //   description: "2025",
    //   buttonlabel: "",
    // },
    {
      id: 7,
      imgsrc: banksystemimage,
      link: "https://cacharreando.net/tibor/sistemabanco/",
      imgalt: "Bank de application",
      title: "Bank Portal Application",
      description: "Dashboard Control Panel. Account Management, Reports. DB connection. 2025",
      buttonlabel: "Bank project outside link",
    },
    {
      id: 6,
      imgsrc: portfolioimage,
      link: "https://cacharreando.net/tibor/portfoliotk/",
      imgalt: "Portfolio",
      title: "Portfolio Website",
      description: "Personal Portfolio Website. Dark mode. Animations. Tabs navigation. 2025",
      buttonlabel: "Portfolio project outside link",
    },
    {
      id: 5,
      imgsrc: TPVimage,
      link: "https://cacharreando.net/tibor/TPVmaquina/",
      imgalt: "TPV Machine",
      title: "TPV Machine Interface",
      description: "Front-End layout for TPV Machine Interface. Printing of tickets. Adding new products. 2025",
      buttonlabel: "TPV Machine project outside link",
    },
    {
      id: 4,
      imgsrc: hotelbrickimage,
      link: "https://cacharreando.net/tibor/hotel/",
      imgalt: "Hotel Brick",
      title: "Hotel Brick",
      description: "Comprehensive Front-End layout for Hotel website, gallery, dark mode, and more. 2025",
      buttonlabel: "Hotel website project outside link",
    },
    {
      id: 3,
      imgsrc: chucknorrisimage,
      link: "https://chucknorris-jokes-api.netlify.app/",
      imgalt: "Simple API site image",
      title: "Chuck Norris Jokes API website",
      description: "Small Fetch API project that shows random joke about Chuck Norris. 2024",
      buttonlabel: "Chuck Norris Jokes API website outside link",
    },
    {
      id: 2,
      imgsrc: vueimage,
      link: "https://drink-api-login.netlify.app/",
      imgalt: "Vue API SPA",
      title: "Vue Framework Project - API",
      description: "SPA Vue.js framework project with API calls. 2023",
      buttonlabel: "Vue.js Project outside link",
    },
    {
      id: 1,
      imgsrc: volandoimage,
      link: "https://volando.art/",
      imgalt: "Voland art site image",
      title: "Artists presentation site",
      description: "Personal Website with an gallery. PHP, Parallax.js, 2020-2021 (collaboration)",
      buttonlabel: "Volando.art - Artists presentation site outside link",
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
    <section className="projects__section mt-header" ref={projectsRef}>
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
