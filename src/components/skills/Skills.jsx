import React from "react";
import "./skills.scss";
import SkillCard from "./SkillCard.jsx";
import reacticon from '/src/assets/icons/react150x150.svg';
import htmlicon from '/src/assets/icons/html150x150.svg';
import cssicon from '/src/assets/icons/css150x150.svg';
import sassicon from '/src/assets/icons/sass150x150.svg';
import jsicon from '/src/assets/icons/javascript150x150.svg';
import pythonicon from '/src/assets/icons/python150x150.svg';
import golangicon from '/src/assets/icons/golang150x150.svg';
import giticon from '/src/assets/icons/git150x150.svg';
import vueicon from '/src/assets/icons/vue150x150.svg';
// import nodejsicon from '/src/assets/icons/nodejs150x150.svg';
import mongodbicon from '/src/assets/icons/mongodb150x150.svg';
import phpicon from '/src/assets/icons/php150x150.svg';
import tailwindicon from '/src/assets/icons/tailwind150x150.svg';
import posgresqlicon from '/src/assets/icons/postgresql150x150.svg';
import bootstrapicon from '/src/assets/icons/bootstrap150x150.svg';
import figmaicon from '/src/assets/icons/figma150x150.svg';
import javaicon from '/src/assets/icons/java150x150.svg';
import jsonicon from '/src/assets/icons/json150x150.svg';

function Skills() {
  return (
    <section className="skills__container" id="about">
      <div className="container__title" aria-label="skills title">
        <h2 className="title__heading eng" lang="en">
          Skills
        </h2>
        <p className="title__subtitle eng" lang="en">
          Tools and Techs
        </p>
      </div>
      <article className="skills__description">I'm proficient in Responsive Design, Accesibility, SEO, CMS and following technologies</article>
      <article className="skills__wrapper" aria-label="skills overview">
        <SkillCard data="ReactJS" src={reacticon}></SkillCard>
        <SkillCard data="HTML5" src={htmlicon}></SkillCard>
        <SkillCard data="CSS3" src={cssicon}></SkillCard>
        <SkillCard data="SASS" src={sassicon}></SkillCard>
        <SkillCard data="JavaScript" src={jsicon}></SkillCard>
        <SkillCard data="Python" src={pythonicon}></SkillCard>
        <SkillCard data="Golang" src={golangicon}></SkillCard>
        <SkillCard data="Git" src={giticon}></SkillCard>
        <SkillCard data="VueJS" src={vueicon}></SkillCard>
        <SkillCard data="MongoDB" src={mongodbicon}></SkillCard>
        <SkillCard data="PHP" src={phpicon}></SkillCard>
        <SkillCard data="TailwindCSS" src={tailwindicon}></SkillCard>
        <SkillCard data="PostgreSQL" src={posgresqlicon}></SkillCard>
        <SkillCard data="Bootstrap" src={bootstrapicon}></SkillCard>
        <SkillCard data="Figma" src={figmaicon}></SkillCard>
        <SkillCard data="Java" src={javaicon}></SkillCard>
        <SkillCard data="Json" src={jsonicon}></SkillCard>
      </article>
    </section>
  );
}

export default Skills;
