import React, { useEffect, useContext } from "react";
import FeatherIcon from "feather-icons-react";
import classes from "./DetailedCard.module.css";
import { CountryContext } from "../Context/CountryProvider";

const DetailedCard = ({
  cardClick,
  setCardClick,
  show,
  setShow,
  countryCodeToName,
}) => {
  const { stateCountriesData } = useContext(CountryContext);
  const [stateCountries, setStateCountries] = stateCountriesData;

  return (
    <div className={classes.main_container}>
      <button
        className={classes.button_back}
        onClick={() => {
          setShow(false);
          setCardClick({});
        }}
      >
        <FeatherIcon icon="arrow-left" size="20" strokeWidth="1.5" />
        <span className={classes.button_back_text}>Back</span>
      </button>
      <div className={classes.detail_container}>
        <img src={cardClick.flags.svg}></img>
        <div className={classes.all_details}>
          <h1>{cardClick.name}</h1>
          <div className={classes.list_items_container}>
            <div className={classes.list1}>
              <li>
                Native Name: <span>{cardClick.nativeName}</span>
              </li>
              <li>
                Population: <span>{cardClick.population}</span>
              </li>
              <li>
                Region: <span>{cardClick.region}</span>
              </li>
              <li>
                Sub Region: <span>{cardClick.subregion}</span>
              </li>
              <li>
                Capital: <span>{cardClick.capital}</span>
              </li>
            </div>
            <div className={classes.list2}>
              <li>
                Top Level Domian: <span>{cardClick.topLevelDomain}</span>
              </li>
              <li>
                Currencies:{" "}
                <span>
                  {"currencies" in cardClick
                    ? cardClick.currencies.map((item) => item.name)
                    : "-"}
                </span>
              </li>
              <li>
                Languages:{" "}
                <span>
                  {"languages" in cardClick
                    ? cardClick.languages.map((item) => item.name).join(", ")
                    : "-"}
                </span>
              </li>
            </div>
          </div>
          <div className={classes.border_countries}>
            {"borders" in cardClick ? (
              <li>
                Border Countries :{" "}
                {countryCodeToName().map((item) => {
                  return (
                    <span>
                      &nbsp; &nbsp;
                      <button key={item}>{item}</button>
                    </span>
                  );
                })}
              </li>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
