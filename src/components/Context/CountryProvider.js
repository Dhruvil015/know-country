import React, { useState, useEffect, createContext } from "react";

export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    if (data) {
      setCountries(data);
      setLoading(false);
    }
  };

  return (
    <CountryContext.Provider
      value={{
        stateCountriesData: [countries, setCountries],
        stateLoadingData: [loading, setLoading],
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
