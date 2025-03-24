import React from "react";
import { useState} from "react";
import "./navbar.scss";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const variants = {
    // open:{},
    // closed:{}
  // }

  
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
        <a href="/" className="header__iconswrapper">
          <img
            src="/src/assets/svg/mdi-moon-waning-crescent.svg"
            alt="dark mode icon"
            className="icon__darkmodeswitch"
          />
        </a>
      </nav>

      <ToggleButton isOpen={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
