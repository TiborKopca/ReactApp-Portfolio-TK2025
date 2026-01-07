import { useState, useEffect } from 'react';

/**
 * Custom hook to manage loading logo display logic
 * 
 * Strategy: Hybrid approach
 * - Shows once per session (sessionStorage)
 * - Plus 10-minute cooldown (localStorage)
 * - Cookie backup for compatibility
 * 
 * @returns {boolean} shouldShow - Whether logo should be displayed
 */
export const useLoadingLogo = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const COOLDOWN_MINUTES = 10;
  const COOLDOWN_MS = COOLDOWN_MINUTES * 60 * 1000;

  useEffect(() => {
    const checkShouldShow = () => {
      try {
        // Check sessionStorage first (quick check for current session)
        const shownThisSession = sessionStorage.getItem('logoShownThisSession');
        
        if (shownThisSession === 'true') {
          // Already shown in this session
          return false;
        }

        // Check localStorage for cooldown timer
        const lastShownStr = localStorage.getItem('logoLastShown');
        
        if (!lastShownStr) {
          // Never shown before - show it!
          return true;
        }

        const lastShown = parseInt(lastShownStr, 10);
        const now = Date.now();
        const timeSinceLastShow = now - lastShown;

        // Show if cooldown period has passed
        return timeSinceLastShow > COOLDOWN_MS;
      } catch (error) {
        // If storage fails, try cookie fallback
        console.warn('Storage access failed, trying cookie fallback:', error);
        return checkCookieFallback();
      }
    };

    // Cookie fallback function
    const checkCookieFallback = () => {
      try {
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('logoShownThisSession='));
        
        // If cookie exists, don't show
        return !cookieValue;
      } catch (error) {
        console.error('Cookie check failed:', error);
        // If all fails, show logo (better safe than annoying)
        return true;
      }
    };

    setShouldShow(checkShouldShow());
  }, [COOLDOWN_MS]);

  /**
   * Mark logo as shown and update storage
   * Call this when logo animation completes
   */
  const markAsShown = () => {
    const now = Date.now();

    try {
      // Set sessionStorage (clears when tab closes)
      sessionStorage.setItem('logoShownThisSession', 'true');

      // Set localStorage with timestamp
      localStorage.setItem('logoLastShown', now.toString());

      // Set cookie as backup (expires in 10 minutes)
      const expiryDate = new Date(now + COOLDOWN_MS);
      document.cookie = `logoShownThisSession=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;

      console.log('✅ Loading logo marked as shown');
    } catch (error) {
      console.error('Failed to save logo shown state:', error);
    }
  };

  return {
    shouldShow,
    markAsShown
  };
};