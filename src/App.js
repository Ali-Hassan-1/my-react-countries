import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Countries from "./components/Countries/Countries";
import CountryDetailPage from "./components/CountryDetailPage/CountryDetailPage";
import "./App.css";

const URL = "https://restcountries.eu/rest/v2/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [toggleComponent, setToggleComponent] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data: countries } = await axios.get(URL);
    setCountries(countries);
  };

  const handleToggle = (toggle) => {
    setToggleComponent(toggle);
  };

  const getCountry = (country) => {
    setCountry(country);
  };

  const handleThemeChange = (value) => {
    setDarkTheme(value);
  };

  return (
    <div className={darkTheme ? "App" : ""}>
      <Navbar onSelectTheme={handleThemeChange} darkTheme={darkTheme} />
      {toggleComponent ? (
        <CountryDetailPage handleToggle={handleToggle} country={country} />
      ) : (
        <Countries
          countries={countries}
          handleToggle={handleToggle}
          onSelectCountry={getCountry}
          darkTheme={darkTheme}
        />
      )}
    </div>
  );
}

export default App;
