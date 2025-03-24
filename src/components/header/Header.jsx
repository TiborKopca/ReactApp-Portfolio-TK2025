import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar.jsx";

function Header() {
  
  return (
    <header className="header" id="stickynavbar">
      <a href="#Hero" aria-label="homepage link" className="header__logowrapper">
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
      
      <Navbar></Navbar>

      
    </header>
  );
}

export default Header;
