import React from "react";
import classes from "./CountryCard.module.css";

// country.name.trim().toLowerCase()

const CountryCard = ({ theme, countries, setShow, setCardClick }) => {
  return (
    <div className={classes.container}>
      {countries.map((country) => {
        return (
          <div
            className={theme ? classes.card_dark : classes.card}
            key={country.name}
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
              setCardClick(country);
            }}
          >
            <div className={classes.country_img}>
              <img src={country.flags.svg} alt={country.name} />
            </div>
            <div
              className={
                theme ? classes.country_info_dark : classes.country_info
              }
            >
              <p>{country.name}</p>
              <li>
                Population: <span>{country.population}</span>
              </li>
              <li>
                Region: <span>{country.region}</span>
              </li>
              <li>
                Capital: <span>{country.capital}</span>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCard;
