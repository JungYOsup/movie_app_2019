import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//Movies.js 는 state가 필요 없기 때문에 class component로 선언해줄 필요가 없다.
//why 필요가 없어?
//class component는 state를 사용하기 위함이고, state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
//그런데 Movies.js는 데이터를 받기만 하지 그 데이터로 작업을 하지는 않으므로

function Movies({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired //프로프타입이 String인 배열이 요구되어진다.
};

export default Movies;
