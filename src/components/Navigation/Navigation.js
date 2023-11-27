import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = (props) => {
  const { movie } = props;

  return (
    <div className="adri-navigation">
      <div className="adri-navigation-content">
        <Link to="/movie_site">
          <span>Home</span>
        </Link>
        <span>/</span>
        <span>{movie}</span>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  movie: PropTypes.string,
};

export default Navigation;
