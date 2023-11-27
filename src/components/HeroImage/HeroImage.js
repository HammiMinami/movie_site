import React from "react";
import PropTypes from "prop-types";
import "./HeroImage.css";

const HeroImage = (props) => {
  const { image, title, text } = props;

  return (
    <div
      className="adri-heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${image}'), #1c1c1c`,
      }}
    >
      <div className="adri-heroimage-content">
        <div className="adri-heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default HeroImage;
