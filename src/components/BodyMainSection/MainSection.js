import React, { useState, useContext, useEffect } from "react";
import FilterRegion from "../FilterRegion/FilterRegion";
import SearchBar from "../search/SearchBar";
import classes from "./MainSection.module.css";
import CountryCard from "../CountryCard/CountryCard";
import { CountryContext } from "../Context/CountryProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import DetailedCard from "../DetailedCard/DetailedCard";

const MainSection = () => {
  const { theme } = useContext(ThemeContext);
  const { stateCountriesData, stateLoadingData } = useContext(CountryContext);
  const [stateCountries] = stateCountriesData;
  const [stateLoading] = stateLoadingData;
  const [select, setSelect] = useState("");
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);
  const [cardClick, setCardClick] = useState({});

  useEffect(() => {
    setCountries(stateCountries);
  }, [stateCountries]);

  const countryCodeToName = () => {
    if ("borders" in cardClick) {
      return stateCountries
        .filter((country) => "borders" in country)
        .filter((country) => cardClick.borders.includes(country.alpha3Code))
        .map((country) => country.name);
    }
  };

  const fuzzySearchHandler = (e, search) => {
    e.preventDefault();
    const resultCountries = stateCountries.filter((country) => {
      return (
        country.name
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        search.trim().toLowerCase().substring(0, search.length) ===
          country.name.trim().toLowerCase().substring(0, search.length)
      );
    });
    if (resultCountries.length === 0) {
      setCountries(stateCountries);
    } else {
      setCountries(resultCountries);
    }
  };

  const onFilterSubmit = (e, reg) => {
    e.preventDefault();
    const resultCountries = stateCountries.filter((country) => {
      return country.region === reg;
    });
    setCountries(resultCountries);
  };

  return (
    <div>
      {!show ? (
        <div>
          <div className={classes.head_search_filter}>
            <SearchBar theme={theme} fuzzySearchHandler={fuzzySearchHandler} />
            <FilterRegion
              theme={theme}
              select={select}
              setSelect={setSelect}
              onFilterSubmit={onFilterSubmit}
            />
          </div>
          {stateLoading ? (
            <h1
              style={{
                textAlign: "center",
                color: "var(--LM-text)",
              }}
            >
              Loading...
            </h1>
          ) : (
            <div className={classes.country_cards}>
              <CountryCard
                theme={theme}
                countries={countries}
                setShow={setShow}
                setCardClick={setCardClick}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <DetailedCard
            theme={theme}
            cardClick={cardClick}
            setCardClick={setCardClick}
            show={show}
            setShow={setShow}
            countryCodeToName={countryCodeToName}
          />
        </div>
      )}
    </div>
  );
};

export default MainSection;
