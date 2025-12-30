import React from "react";
import { useState} from "react";
import "./navbar.scss";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import moonicon from "/src/assets/svg/mdi-moon-waning-crescent.svg";
import sunicon from "/src/assets/svg/mdi_white-balance-sunny.svg";
import { useThemeContext } from "../../hooks/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const variants = {
    // open:{},
    // closed:{}
  // }
const { isDarkMode, toggleTheme } = useThemeContext();
  
  return (
    <>
      <nav
        className={`header__menu ${open ? 'mobile-menu-open' : 'mobile-menu-closed'}`}
        id="headerMenu"
        aria-label="main navigation menu"
      >
        <Links />

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

        {/* <button className="darkModeSwitch" id="switch">
        <span>
          <i className="switchIcon fa-solid fa-sun"></i>
        </span>
        <span>
          <i className="switchIcon fa-solid fa-moon"></i>
        </span>
      </button> */}

      <button 
          className="header__iconswrapper"
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img
            src={isDarkMode ? sunicon : moonicon}
            alt={isDarkMode ? "sun icon" : "moon icon"}
            className="icon__darkmodeswitch"
          />
        </button>
      </nav>

     

      <ToggleButton isOpen={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
