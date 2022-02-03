import React from "react";
import classes from "./SearchBar.module.css";
import FeatherIcon from "feather-icons-react";

const SearchBar = ({ theme, fuzzySearchHandler }) => {
  return (
    <form
      className={
        theme ? classes.search_country_form_dark : classes.search_country_form
      }
      onSubmit={(e) => e.preventDefault()}
    >
      {theme ? (
        <FeatherIcon icon="search" size="18" stroke="var(--DM-text)" />
      ) : (
        <FeatherIcon icon="search" size="18" stroke="var(--LM-input)" />
      )}
      <input
        type="text"
        className={theme ? classes.inputField_dark : classes.inputField}
        placeholder="Search for a country..."
        onInput={(e) => {
          fuzzySearchHandler(e, e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchBar;
