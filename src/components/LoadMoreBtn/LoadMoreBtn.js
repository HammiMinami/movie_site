import React from "react";
import PropTypes from "prop-types";
import "./LoadMoreBtn.css";

const LoadMoreBtn = (props) => {
  const { text, onClick } = props;

  return (
    <div className="adri-loadmorebtn" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default LoadMoreBtn;
