import React from 'react';
//import PropTypes from 'prop-types';
//import "./Movie.css";

function Food({ name, place, start, end }) {
  return (
    <div className="exhi-article">
      <h3>{name.slice(0,-1)}</h3>
      <div className="exhi-time">
        <span>{start.slice(0,-1)}</span>
        <span>-</span>
        <span>{end.slice(0,-1)}</span>
      </div>
      <p className="exhi-place">{place.slice(0,-1)}</p>
    </div>
  );
}

export default Food;