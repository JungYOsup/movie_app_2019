import React from "react";
import PropTypes from "prop-types";

//Movies.js 는 state가 필요 없기 때문에 class component로 선언해줄 필요가 없다.
//why 필요가 없어?
//class component는 state를 사용하기 위함이고, state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
//그런데 Movies.js는 데이터를 받기만 하지 그 데이터로 작업을 하지는 않으므로

function Movies({ id, year, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movies;
