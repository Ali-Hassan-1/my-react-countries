import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Country from "./Country/Country";
import ListGroup from "../ListGroup/ListGroup";
import { paginate } from "../../utils/paginate";
import Pagination from "../Pagination/Pagination";
import "./Countries.css";

function Countries({ countries, handleToggle, darkTheme, onSelectCountry }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const genre = [
    { _id: 1, name: "All" },
    { _id: 2, name: "Asia" },
    { _id: 3, name: "Africa" },
    { _id: 4, name: "Americas" },
    { _id: 5, name: "Europe" },
    { _id: 6, name: "Oceania" },
  ];

  let pageSize = 32;

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre("All");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const getFilteredCountries = () => {
    let filtered = countries;

    if (searchQuery)
      filtered = countries.filter(
        (m) =>
          // by name
          m.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          // by capital
          m.capital.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre === "All") filtered = countries;
    // by genre
    else if (selectedGenre)
      filtered = countries.filter((m) => m.region === selectedGenre);

    const paginateCountries = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: paginateCountries };
  };

  const { totalCount, data: filteredCountries } = getFilteredCountries();

  return (
    <>
      <div className="input-and-filter">
        <div className="search">
          <FaSearch
            className="fa-search"
            color={darkTheme && "#000"}
            size={25}
          />
          <input
            type="text"
            autoFocus
            placeholder="Search by name or capital..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
          />
        </div>

        <ListGroup
          list={genre}
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
        />
      </div>

      <p className="totalCount">Total Result:{totalCount}</p>

      <div className="container">
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="country-list">
        {filteredCountries.map((country, index) => (
          <a
            key={index}
            onClick={() => {
              handleToggle(true);
              onSelectCountry(country);
            }}
          >
            <Country key={country.name} country={country} />
          </a>
        ))}
      </div>
    </>
  );
}

export default Countries;
