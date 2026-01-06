import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../hooks/ThemeContext";
import "./notfound.scss";

function NotFound() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={`notfound-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="notfound-page__container">
        
        {/* 404 Visual */}
        <div className="notfound-page__visual">
          <h1 className="notfound-page__code">404</h1>
          <div className="notfound-page__divider"></div>
        </div>

        {/* Content */}
        <div className="notfound-page__content">
          <h2 className="notfound-page__title">Page Not Found</h2>
          <p className="notfound-page__description">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="notfound-page__suggestion">
            It might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="notfound-page__actions">
            <button 
              className="notfound-page__button notfound-page__button--primary"
              onClick={handleGoHome}
              aria-label="Go to homepage"
            >
              <span className="button__icon">🏠</span>
              <span className="button__text">Back to Home</span>
            </button>

            <Link 
              to="/#Contact"
              className="notfound-page__button notfound-page__button--secondary"
              aria-label="Contact me"
            >
              <span className="button__icon">✉️</span>
              <span className="button__text">Contact Me</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="notfound-page__links">
            <p className="links__title">You might be looking for:</p>
            <div className="links__grid">
              <Link to="/#About" className="link__item">About Me</Link>
              <Link to="/#Skills" className="link__item">Skills</Link>
              <Link to="/#Projects" className="link__item">Projects</Link>
              <Link to="/#Contact" className="link__item">Contact</Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="notfound-page__decoration">
          <div className="decoration__circle decoration__circle--1"></div>
          <div className="decoration__circle decoration__circle--2"></div>
          <div className="decoration__circle decoration__circle--3"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;