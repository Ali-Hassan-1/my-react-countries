import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import "./CountryDetailPage.css";

function CountryDetailPage({ handleToggle, country }) {
  return (
    <div className="country-detail-page">
      <button
        onClick={() => handleToggle(false)}
        className="back-btn"
        type="button"
      >
        <FaArrowAltCircleLeft /> Back
      </button>
      <div className="container">
        <div className="row">
          <div className="col-xsm-6 col-lg-6 flag">
            <img width="400" height="300" src={country.flag} alt="flag" />
          </div>
          <div className="col-xsm-6 col-lg-6 other-detail">
            <div className="row">
              <h4>{country.name}</h4>
              <div className="col-xsm-6 col-lg-6">
                <p>
                  <b>Native name:</b> {country.nativeName}
                </p>
                <p>
                  <b>Popultaion:</b> {country.population}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Subregion:</b> {country.subregion}
                </p>
                <p>
                  <b>Capital:</b> {country.capital}
                </p>
              </div>
              <div className="col-xsm-6 col-lg-6">
                <p>
                  <b>Top level domain:</b> {country.topLevelDomain[0]}
                </p>
                <p>
                  <b>Currencey:</b> {country.currencies[0].code}
                </p>
                <p>
                  <b>Languages: </b>
                  {country.languages.map((language, index) => (
                    <span key={index}>{language.name},</span>
                  ))}
                </p>
              </div>
              <div className="row">
                <h5>Border Countries:</h5>

                <div className="col-xsm-6 col-lg-10 boundaries">
                  {!country.borders.length
                    ? "No Border"
                    : country.borders.map((border, index) => (
                        <button key={index}>{border}</button>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailPage;
