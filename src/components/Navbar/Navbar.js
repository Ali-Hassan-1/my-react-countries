import React from "react";
import { FaMoon } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar({ onSelectTheme, darkTheme }) {
  return (
    <>
      <div className="custom-navbar">
        <h6>
          <b>Where in the World?</b>
        </h6>
        <button
          className={darkTheme ? "custom-btn-dark" : "custom-btn-light"}
          onClick={() => onSelectTheme(!darkTheme)}
        >
          <FaMoon />
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}
