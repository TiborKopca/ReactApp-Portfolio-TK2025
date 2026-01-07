import React, { useState, useEffect } from "react";
import TKLogo from "./TKLogo";
import "./loadinglogo.scss";

/**
 * LoadingLogo Component - Simple & Reliable
 * 
 * Shows animated logo on first visit, then hides permanently.
 * Uses minimal state to avoid blocking issues.
 */
function LoadingLogo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if logo should show
    const shouldShow = checkIfShouldShow();
    
    if (shouldShow) {
      setShow(true);
      
      // Hide after 10 seconds
      const timer = setTimeout(() => {
        setShow(false);
        markAsShown();
      }, 10000);

      return () => clearTimeout(timer);
    } else {
      // Logo shouldn't show, remove the black screen immediately
      document.body.classList.add('logo-checked');
    }
  }, []);

  // Check storage to see if logo was already shown
  function checkIfShouldShow() {
    try {
      // Check session first (fastest)
      const sessionCheck = sessionStorage.getItem('logoShown');
      if (sessionCheck === 'true') return false;

      // Check localStorage for cooldown
      const lastShown = localStorage.getItem('logoLastShown');
      if (!lastShown) return true; // Never shown

      const tenMinutes = 10 * 60 * 1000;
      const timePassed = Date.now() - parseInt(lastShown);
      
      return timePassed > tenMinutes;
    } catch (error) {
      console.error('Storage check failed:', error);
      return false; // Don't show if storage fails
    }
  }

  // Mark logo as shown
  function markAsShown() {
    try {
      sessionStorage.setItem('logoShown', 'true');
      localStorage.setItem('logoLastShown', Date.now().toString());
      
      // Remove the black screen
      document.body.classList.add('logo-checked');
    } catch (error) {
      console.error('Failed to save logo state:', error);
    }
  }

  // Handle skip (ESC or click/tap)
  function handleSkip() {
    setShow(false);
    markAsShown();
  }

  useEffect(() => {
    if (!show) return;

    // ESC key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        handleSkip();
      }
    };

    // Click/tap listener
    const handleClick = () => {
      handleSkip();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="loading-logo">
      <div className="loading-logo__container">
        <TKLogo animate={true} />
        
        <div className="loading-logo__skip-hint">
          <p className="skip-hint__desktop">Press ESC to skip</p>
          <p className="skip-hint__mobile">Tap to skip</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingLogo;