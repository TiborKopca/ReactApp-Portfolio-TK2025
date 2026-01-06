import React from "react";
import { Link } from "react-router-dom"; // ADD THIS IMPORT
import "./footer.scss";
import arrowup from "/src/assets/svg/arrowup.svg";
import linkedin from "/src/assets/svg/devicon_linkedin.svg";
import slack from "/src/assets/svg/devicon_slack.svg";
import github from "/src/assets/svg/mdi_github.svg";
import whatsapp from "/src/assets/svg/logos_whatsapp-icon.svg";
import discord from "/src/assets/svg/discord.svg";
import instagram from "/src/assets/svg/skill-icons_instagram.svg";

function Footer() {
  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <footer className="snap-container mt-header footer" aria-label="footer">
      <span onClick={topFunction} className="footer__returnicon" id="jumpToTop">
        <img src={arrowup} alt="arrow up icon" className="icon__arrowup" />
      </span>

      <div className="footer__social">
        <a
          className="socialicons"
          href="https://www.linkedin.com/in/tibor-kopca-28800818/"
          target="_blank"
          rel="noopener noreferrer"
          title="Stalk me on LinkedIn"
          aria-label="linkedin link"
        >
          <img src={linkedin} alt="linkedin icon" className="icon__linkedin" />
        </a>
        <a
          className="socialicons"
          href="https://github.com/TiborKopca"
          target="_blank"
          rel="noopener noreferrer"
          title="Check out my code on Github"
        >
          <img src={github} alt="github icon" className="icon__github" />
        </a>
        <a
          className="socialicons"
          href="http://teamkkworkspace.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Team up with me on Slack"
        >
          <img src={slack} alt="slack icon" className="icon__slack" />
        </a>
        <a
          className="socialicons"
          href="https://wa.me/34644355960?text=I'd%20like%20to%20chat%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          id="WAButton"
          title="Chat with me on Whatsapp"
        >
          <img src={whatsapp} alt="whatsapp icon" className="icon__whatsapp" />
        </a>
        <a
          className="socialicons"
          href="https://discord.gg/suwbu7aU"
          target="_blank"
          rel="noopener noreferrer"
          title="Join me on discord"
          aria-label="discord link"
        >
          <img src={discord} alt="discord icon" className="icon__discord" />
        </a>
        <a 
          className="socialicons" 
          href="https://www.instagram.com/tibor_kopca/" 
          target="_blank"
          rel="noopener noreferrer"
          title="Stalk me on Instagram" 
          aria-label="instagram link"
        >
          <img src={instagram} alt="instagram icon" className="icon__instagram" />
        </a>
      </div>

      
      <div className="policies">
        <Link
          className="policies__link"
          to="/privacy-policy"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </Link>
        <Link
          className="policies__link"
          to="/terms-conditions"
          aria-label="Terms and Conditions"
        >
          Terms and Conditions
        </Link>
      </div>

      <p className="credits">
        Created by Tibor Kopca | &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;