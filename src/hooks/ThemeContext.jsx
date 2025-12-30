import React, { createContext, useContext } from 'react';
import { useTheme } from './useTheme';

/**
 * Context for Theme Management
 * Provides theme state and toggle function to all children
 */
const ThemeContext = createContext();

/**
 * Custom hook to access theme context
 * @returns {{ theme: 'light' | 'dark', isDarkMode: boolean, toggleTheme: () => void }}
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
};

/**
 * Provider component for Theme Management
 * Wrap your app with this component to enable dark mode throughout
 * 
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};