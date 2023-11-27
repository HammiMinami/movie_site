import React from "react";
import PropTypes from "prop-types";
import "./FourColGrid.css";

const FourColGrid = (props) => {
  const { header, loading, children } = props;

  const renderElements = () => {
    const gridElements = children.map((element, i) => (
      <div key={i} className="adri-grid-element">
        {element}
      </div>
    ));
    return gridElements;
  };

  return (
    <div className="adri-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="adri-grid-content">{renderElements()}</div>
    </div>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool,
};

export default FourColGrid;
