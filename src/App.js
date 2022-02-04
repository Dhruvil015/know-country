import React, { useEffect, useState } from "react";
import { CountryProvider } from "./components/Context/CountryProvider";
import NavigationBar from "./components/navigation/NavigationBar";
import MainSection from "./components/BodyMainSection/MainSection";
import "./App.css";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };
  const [theme, setTheme] = useState(getTheme());

  const themeHandler = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  useEffect(
    (e) => {
      localStorage.setItem("theme", JSON.stringify(theme));

      if (theme) {
        document.getElementById("body").style.backgroundColor = "#202c37";
      } else {
        document.getElementById("body").style.backgroundColor = "#fafafa";
      }
    },
    [theme]
  );

  return (
    <CountryProvider>
      <div className={theme ? "dark" : "light"}>
        <NavigationBar theme={theme} themeHandler={themeHandler} />
        <MainSection />
      </div>
    </CountryProvider>
  );
}

export default App;
