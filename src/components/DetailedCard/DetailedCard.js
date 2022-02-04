import React, { useContext } from "react";
import FeatherIcon from "feather-icons-react";
import classes from "./DetailedCard.module.css";
import { CountryContext } from "../Context/CountryProvider";

const DetailedCard = ({
  cardClick,
  setCardClick,
  setShow,
  countryCodeToName,
}) => {
  const { stateCountriesData } = useContext(CountryContext);
  const [stateCountries] = stateCountriesData;

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
        <img src={cardClick.flags.svg} alt={cardClick.name}></img>
        <div className={classes.all_details}>
          <h1 className={classes.title}>{cardClick.name}</h1>
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
          <div className={classes.border_countries_container}>
            {"borders" in cardClick ? (
              <div className={classes.border_countries}>
                <div className={classes.border_countries_heading}>
                  Border Countries :
                </div>
                <div>
                  {countryCodeToName().map((item) => {
                    return (
                      <React.Fragment key={item}>
                        &nbsp;
                        <button
                          className={classes.btn}
                          key={item}
                          onClick={(e) => {
                            e.preventDefault();
                            setCardClick(
                              stateCountries.filter(
                                (country) => country.name === item
                              )[0]
                            );
                          }}
                        >
                          {item}
                        </button>
                        &nbsp;
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
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
