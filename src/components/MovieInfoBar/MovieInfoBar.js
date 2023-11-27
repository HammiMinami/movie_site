import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { calcTime, convertMoney } from "../../helpers.js";
import "./MovieInfoBar.css";

const MovieInfoBar = (props) => {
  const { time, budget, revenue } = props;

  return (
    <div className="adri-movieinfobar">
      <div className="adri-movieinfobar-content">
        <div className="adri-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="adri-movieinfobar-info">
            Running time: {calcTime(time)}
          </span>
        </div>
        <div className="adri-movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="adri-movieinfobar-info">
            Budget: {budget === 0 ? "--" : convertMoney(budget)}
          </span>
        </div>
        <div className="adri-movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="adri-movieinfobar-info">
            Revenue: {revenue === 0 ? "--" : convertMoney(revenue)}
          </span>
        </div>
      </div>
    </div>
  );
};

MovieInfoBar.propTypes = {
  budget: PropTypes.number,
  revenue: PropTypes.number,
  time: PropTypes.number,
};

export default MovieInfoBar;
