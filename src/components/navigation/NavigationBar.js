import React from "react";
import classes from "./NavigationBar.module.css";
import FeatherIcon from "feather-icons-react";

const NavigationBar = ({ theme, themeHandler }) => {
  return (
    <div className={classes.nav_container}>
      <p className={classes.head_title}>Where in the world?</p>
      <div className={classes.btn_theme} onClick={(e) => themeHandler(e)}>
        {theme ? (
          <FeatherIcon icon="moon" size="16" fill="white" stroke="" />
        ) : (
          <FeatherIcon icon="moon" size="16" />
        )}
        <span className={classes.btn_theme_span}>
          {theme ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
};

export default NavigationBar;
