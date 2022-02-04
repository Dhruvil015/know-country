import React from "react";
import classes from "./SearchBar.module.css";
import FeatherIcon from "feather-icons-react";

const SearchBar = ({ fuzzySearchHandler }) => {
  return (
    <form
      className={classes.search_country_form}
      onSubmit={(e) => e.preventDefault()}
    >
      <FeatherIcon icon="search" size="18" stroke="var(--placeholder)" />
      <input
        type="text"
        className={classes.inputField}
        placeholder="Search for a country..."
        onInput={(e) => {
          fuzzySearchHandler(e, e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchBar;
