import React from "react";
import { IMAGE_BASE_URL } from "../../config";
import PropTypes from "prop-types";
import "./Actor.css";

const Actor = (props) => {
  const { actor } = props;

  const POSTER_SIZE = "w780";

  return (
    <div className="adri-actor">
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : "./images/no_image.jpg"
        }
        alt="actorthumb"
      />
      <div>
        <span className="adri-actor-name">{actor.name}</span>
        <span className="adri-actor-character">{actor.character}</span>
      </div>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.object,
};

export default Actor;
