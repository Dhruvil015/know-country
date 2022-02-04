import React, { useState } from "react";
import classes from "./FilterRegion.module.css";
import FeatherIcon from "feather-icons-react";

const FilterRegion = ({ select, setSelect, onFilterSubmit }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={classes.dropdown}>
      <div
        className={classes.dropdown_btn}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{select || "Filter by Region"}</span>
        <FeatherIcon icon="chevron-down" size="16" />
      </div>
      {isActive && (
        <div className={classes.dropdown_content}>
          {options.map((option) => {
            return (
              <div
                key={option}
                className={classes.dropdown_item}
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  onFilterSubmit(e, e.target.textContent);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterRegion;
