import React from "react";

import "./Country.css";

function Country({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt="flag" />
      <div className="country-detail">
        <h2>{country.name}</h2>
        <b>Population: {country.population}</b>
        <br />
        <b>Region:{country.region}</b>
        <br />
        <b>Capital: {country.capital}</b>
      </div>
    </div>
  );
}

export default Country;
