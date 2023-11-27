import React from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import PropTypes from "prop-types";
import "./MovieInfo.css";

const MovieInfo = (props) => {
  const { movie, directors } = props;

  return (
    <div
      className="adri-movieinfo"
      style={{
        background: movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
          : "#000",
      }}
    >
      <div className="adri-movieinfo-content">
        <div className="adri-movieinfo-thumb">
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : `${process.env.PUBLIC_URL}/images/no_image.jpg`
            }
            clickable={false}
          />
        </div>
        <div className="adri-movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="adri-rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={movie.vote_average * 10}
            ></meter>
            <p className="adri-score">{movie.vote_average}</p>
          </div>
          {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {directors.map((element, i) => {
            return (
              <p key={i} className="adri-director">
                {element.name}
              </p>
            );
          })}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  directors: PropTypes.array,
  movie: PropTypes.object,
};

export default MovieInfo;
