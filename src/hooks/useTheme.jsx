// hooks/useTheme.jsx

import { useState, useEffect } from 'react';

/**
 * Enhanced theme hook that detects system preference and allows manual toggle
 * - Respects system preference by default
 * - Allows manual override via toggle
 * - Persists user preference in localStorage
 * - Automatically applies theme to document
 * 
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void, isDarkMode: boolean }}
 */
export const useTheme = () => {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  // Initialize from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || getSystemTheme();
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes (only if user hasn't manually set preference)
  useEffect(() => {
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      // Only auto-update if no manual preference is saved
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark'
  };
};
