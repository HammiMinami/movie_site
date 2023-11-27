import React from "react";
import { IMAGE_BASE_URL } from "../../config";
import PropTypes from "prop-types";
import "./Details.css";

const Details = (props) => {
  const { movie } = props;
  const {
    genres,
    production_companies,
    production_countries,
    spoken_languages,
  } = movie || {};
  const POSTER_SIZE = "w500";

  return (
    <div className="adri-details">
      <h1>DETAILS</h1>
      {movie ? (
        <div className="adri-detail-body">
          <div className="adri-info">
            <h2>Production Contries</h2>
            {production_countries.map((country, idx) => (
              <span key={`country-${idx}`}>{country.name}</span>
            ))}
          </div>
          <div className="adri-info">
            <h2>Languages</h2>
            {spoken_languages.map((language, idx) => (
              <span key={`lang-${idx}`}>{language.english_name}</span>
            ))}
          </div>
          <div className="adri-info">
            <h2>Production Companies</h2>
            {production_companies.map((company, idx) => (
              <div key={`company-${idx}`} className="adri-company">
                {company.logo_path && (
                  <img
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${company.logo_path}`}
                    className="adri-icon-logo"
                    alt="..."
                  />
                )}
                <span className="card-body">{company.name}</span>
              </div>
            ))}
          </div>
          <div className="adri-info">
            <h2>Genres</h2>
            {genres.map((genre, idx) => (
              <span key={`genre-${idx}`}>{genre.name}</span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

Details.propTypes = {
  movie: PropTypes.object,
};

export default Details;
