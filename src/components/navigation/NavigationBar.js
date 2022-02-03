import React from "react";
import classes from "./NavigationBar.module.css";
import FeatherIcon from "feather-icons-react";

const NavigationBar = ({ theme, themeFunction }) => {
  return (
    <div
      className={
        theme ? classes.nav_dark_container : classes.nav_white_container
      }
    >
      <p className={theme ? classes.head_title_dark : classes.head_title}>
        Where in the world?
      </p>
      <div className={classes.btn_theme} onClick={(e) => themeFunction(e)}>
        {theme ? (
          <FeatherIcon icon="moon" size="16" fill="white" stroke="" />
        ) : (
          <FeatherIcon icon="moon" size="16" />
        )}
        <span
          className={
            theme ? classes.btn_theme_span_dark : classes.btn_theme_span_light
          }
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
};

export default NavigationBar;
