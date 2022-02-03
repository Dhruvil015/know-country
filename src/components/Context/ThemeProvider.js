import React, { useState } from "react";
import { createContext } from "react/cjs/react.development";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(false);

  const themeHandler = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: theme, themeFunction: themeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
