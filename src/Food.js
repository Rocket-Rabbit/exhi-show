import React from 'react';
//import PropTypes from 'prop-types';
//import "./Movie.css";

function Food({ name, place, numb }) {
  return (
    <div className="movie">
      <h3>{name}</h3> 
      <p>{place}{numb}</p>
    </div>
  );
}

export default Food;