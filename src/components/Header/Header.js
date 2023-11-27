import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="adri-header">
    <div className="adri-header-content">
      <Link className="adri-logo-link" to="/movie_site">
        <img
          className="adri-logo"
          src={`${process.env.PUBLIC_URL}/images/reactMovie_logo.png`}
          alt="movie-logo"
        />
      </Link>
      <img
        className="adri-second-logo"
        src={`${process.env.PUBLIC_URL}/images/adri_logo.png`}
        alt="adri-logo"
      />
    </div>
  </div>
);

export default Header;
