import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = (props) => {
  const { image, movieId, movieName, clickable } = props;

  return (
    <div className="adri-moviethumb">
      {clickable ? (
        <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
          <img className="clickable" src={image} alt="moviethumb" />
        </Link>
      ) : (
        <img className="moviethumb" src={image} alt="moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  clickable: PropTypes.bool,
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieThumb;
