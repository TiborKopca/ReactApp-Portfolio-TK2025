import React from 'react'

function ToggleButton({isOpen, setOpen}) {
  return (
    <button
        className={`header__hamburger-button hamburger ${isOpen ? 'active' : ''}`}
        aria-label="hamburger menu icon"
        onClick={() => setOpen((prev)=>!(prev))}
      >
      <div className="bar top-bar"></div>
      <div className="bar middle-bar"></div>
      <div className="bar bottom-bar"></div>
      {/* {isOpen ? <div></div> : <img
          src="/src/assets/svg/mdi-hamburger-menu.svg"
          alt="hamburger menu icon"
          className="icon__hamburgermenu"
        /> } */}
        
      </button>
  )
}

export default ToggleButton