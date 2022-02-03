import React, { useContext } from "react";
import { CountryProvider } from "./components/Context/CountryProvider";
import { ThemeContext } from "./components/Context/ThemeProvider";
import NavigationBar from "./components/navigation/NavigationBar";
import MainSection from "./components/BodyMainSection/MainSection";
import { useEffect } from "react/cjs/react.development";

function App() {
  const { theme, themeFunction } = useContext(ThemeContext);

  useEffect(
    (e) => {
      if (theme) {
        document.getElementById("body").style.backgroundColor =
          "var(--DM-background)";
      } else {
        document.getElementById("body").style.backgroundColor =
          "var(--LM-background)";
      }
    },
    [theme]
  );

  return (
    <CountryProvider>
      <div className="App">
        <NavigationBar theme={theme} themeFunction={themeFunction} />
        <MainSection />
      </div>
    </CountryProvider>
  );
}

export default App;
