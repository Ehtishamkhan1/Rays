import React, { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme styles
  const theme = {
    isDarkMode,
    colors: isDarkMode
      ? {
          background: "#1E1E1E",
          text: "#FFFFFF",
          subText: "#A9A9A9",
          icon: "white",
        }
      : {
          background: "#F5F5F5",
          text: "#0F0F0F",
          subText: "#6C7072",
          icon: "black",
        },
    toggleTheme: () => setIsDarkMode((prev) => !prev),
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
