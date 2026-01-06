import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cookieconsent.scss";

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = getConsent();
    
    if (!consent) {
      // Show banner after a small delay for better UX
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100); // Fade in animation
      }, 1000);
    }
  }, []);

  // Get consent from localStorage with cookie fallback
  const getConsent = () => {
    try {
      // Try localStorage first
      const localConsent = localStorage.getItem('cookieConsent');
      if (localConsent) {
        return JSON.parse(localConsent);
      }

      // Fallback to cookies
      const cookieConsent = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookieConsent='));
      
      if (cookieConsent) {
        return JSON.parse(cookieConsent.split('=')[1]);
      }

      return null;
    } catch (error) {
      console.error('Error reading consent:', error);
      return null;
    }
  };

  // Save consent to both localStorage and cookies
  const saveConsent = (consentData) => {
    try {
      const consentString = JSON.stringify(consentData);
      
      // Save to localStorage
      localStorage.setItem('cookieConsent', consentString);

      // Save to cookie as fallback (expires in 1 year)
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = `cookieConsent=${consentString}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
      
      console.log('Consent saved:', consentData);
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  const handleAccept = () => {
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      preferences: {
        necessary: true, // Always true
        analytics: true,
        marketing: false // You can add more categories
      }
    };

    saveConsent(consentData);
    handleClose();
  };

  const handleDecline = () => {
    const consentData = {
      accepted: false,
      timestamp: new Date().toISOString(),
      preferences: {
        necessary: true, // Can't disable necessary cookies
        analytics: false,
        marketing: false
      }
    };

    saveConsent(consentData);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300); // Wait for fade out animation
  };

  if (!showBanner) return null;

  return (
    <div className={`cookie-consent ${isVisible ? 'visible' : ''}`}>
      <div className="cookie-consent__container">
        <div className="cookie-consent__content">
          <div className="cookie-consent__icon">
            🍪
          </div>
          <div className="cookie-consent__text">
            <h3 className="cookie-consent__title">We Value Your Privacy</h3>
            <p className="cookie-consent__description">
              This website uses cookies and localStorage to enhance your browsing experience, 
              analyze site traffic, and provide personalized content. By clicking "Accept", 
              you consent to our use of cookies.
            </p>
            <div className="cookie-consent__links">
              <Link to="/privacy-policy" className="cookie-consent__link">
                Privacy Policy
              </Link>
              <span className="cookie-consent__separator">•</span>
              <Link to="/terms-conditions" className="cookie-consent__link">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        
        <div className="cookie-consent__actions">
          <button 
            className="cookie-consent__button cookie-consent__button--decline"
            onClick={handleDecline}
            aria-label="Decline cookies"
          >
            Decline
          </button>
          <button 
            className="cookie-consent__button cookie-consent__button--accept"
            onClick={handleAccept}
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
