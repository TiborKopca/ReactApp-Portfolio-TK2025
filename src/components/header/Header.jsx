import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="header" id="stickynavbar">
      <a href="/" className="header__logowrapper">
        <svg
          alt="Tibor Kopca logo"
          className="logo__dimensions"
          width="100"
          height="100"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 100 250 250"
        >
          <rect
            className="logo-T-RectangleTop logo-piece"
            x="150"
            y="150"
            rx="5"
            ry="5"
            width="100"
            height="25"
          />
          <rect
            className="logo-T-RectangleBottom logo-piece"
            x="187"
            y="200"
            rx="5"
            ry="5"
            width="25"
            height="90"
          />
          <path
            className="logo-K-Path logo-piece"
            d="M230 220 L300 150 L300 180  L260 220  L300 260  L300 290 Z"
            stroke-linejoin="round"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </a>
      {/* TODO Sidebar - mobile menu */}
      <nav className="header__menu" id="headerMenu">
        <ul className="menu__list">
          <li>
            <a
              data-link="stickynavbar"
              onclick="topFunction()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              About
            </a>
          </li>
          <li>
            <a
              data-link="about"
              onclick="scrollToAbout()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              data-link="work"
              onclick="scrollToWork()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              data-link="work"
              onclick="scrollToWork()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Education
            </a>
          </li>
          <li>
            <a
              data-link="contact"
              onclick="scrollToContact()"
              className="menu__link eng scrollLink"
              lang="en"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* <ul className="languageContainer" id="langButtonsBar">
                    <li id="eng" className="languages british">
                        <span>EN</span>
                    </li>
                    <li id="esp" className="languages spain">
                        <p>ES</p>
                    </li>
                    <li id="svk" className="languages slovak">
                        <p>SK</p>
                    </li>
                </ul> */}
      </nav>

      {/* <button className="darkModeSwitch" id="switch">
            <span>
              <i className="switchIcon fa-solid fa-sun"></i>
            </span>
            <span>
              <i className="switchIcon fa-solid fa-moon"></i>
            </span>
          </button> */}
      <a href="/" className="header__iconswrapper">
        <img
          src="/src/assets/svg/mdi-moon-waning-crescent.svg"
          alt="dark mode icon"
          className="icon__darkmodeswitch"
        />
      </a>
    </header>
  );
}

export default Header;
