import React from 'react';
import PropTypes from 'prop-types';
//import "./Movie.css";
// import { Link } from 'react-router-dom';

function Food({ title, year, summary, poster, genres, posterLg, back }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { title, year, summary, poster, posterLg, genres, back } }}>
      {/* state:에 파라미터를 받는다 */}
      <img src={poster} alt={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movie_genre">{genre}</li>
              // map을 통해 반복되는 콤포넌트는 반드시 고유의 key 가 있어야 한다.
            );
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Food;