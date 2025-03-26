import React from "react";
import "./about.scss";
import CV_ES_PDF from '/src/assets/Tibor_Kopca_CV_febrero_2025_ES.pdf';

function About() {
  const handleDownload = () => { 
    const pdfPath = CV_ES_PDF;   
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'cv-tiborkopca.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // MAIN CONTENT
  return (
    <section className="aboutme__container" id="about">
      <div className="container__title" aria-label="about me title">
        <h2 className="title__heading eng" lang="en">
          About me
        </h2>
        <p className="title__subtitle eng" lang="en">
          Education and Background
        </p>
      </div>

      <button className="aboutme__button" aria-label="download cv button" onClick={handleDownload}>Download CV</button>

      <article className="container__overview" aria-label="about me overview">
        <h3 className="overview__title" lang="en">
          Overview
        </h3>

        <p className="overview__text" lang="en">
          I'm a Web developer with a passion about new technologies, innovation, web design, programming or UI/UX.
        </p>
        <p className="overview__text" lang="en">
          Constantly improving my skills and knowledge in the field of web development.
        </p>
      </article>

      <article className="container__studies" aria-label="about me studies">
        <h3 className="studies__title" lang="en">
          Studies
        </h3>

        <p className="studies__text" lang="en">
          I've studied Front-End development of responsive web design and Back-end programming in many courses and by myself. All certificates can be found in my <a href="https://www.linkedin.com/in/tibor-kopca-28800818/" target="_blank" className="studies__linkedin">LinkedIn</a> profile.
        </p>
        <p className="studies__text" lang="en">I have engineering education with a focus on information technologies and experience in Technical Support and Data Analysis.</p>
      </article>
    </section>
  );
}

export default About;
