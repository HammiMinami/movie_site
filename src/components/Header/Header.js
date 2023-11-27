import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="adri-header">
    <div className="adri-header-content">
      <Link className="adri-logo-link" to="/">
        <img
          className="adri-logo"
          src="/images/reactMovie_logo.png"
          alt="movie-logo"
        />
      </Link>
      <img
        className="adri-second-logo"
        src="/images/adri_logo.png"
        alt="adri-logo"
      />
    </div>
  </div>
);

export default Header;
