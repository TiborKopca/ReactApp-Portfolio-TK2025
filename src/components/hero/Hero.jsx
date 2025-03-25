import React from "react";
import "./hero.scss";
import heroImage from "/src/assets/img/derek-thomson-NqJYQ3m_rVA-unsplash.avif";
import profilePhoto from "/src/assets/img/TiborKopcaWA.avif";

function Hero() {
  return (
    <section
      className="snap-container hero"
      id="Hero"
      aria-label="Hero Section"
    >
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="hero image nightsky with stars"
        className="hero__img"
        loading="lazy"
      />
      {/* Hero Identity Section */}
      <div className="hero__id" id="nameboxContainer">
        <img src={profilePhoto} alt="profile photo" className="id__photo"/>
        <div className="id__namebox">
          <h1 className="namebox__name">Tibor Kopca</h1>
          <h2 className="nambox__profession eng" lang="en">
            Web Developer
          </h2>
        </div>
      </div>
      <button className="hero__cta">Let's Connect</button>
    </section>
  );
}

export default Hero;
