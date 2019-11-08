import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies); // 우리가 가져올 데이터는 movies.data.data.movies이다
    //그러나 이런 예쁘지 않은 코딩은 Es6버전에서 새롭게 바뀌었다.

    const {
      data: {
        data: { movies }
      } //바로 ES6 기능으로 , movies.data.data.movies 가져옴 , movies안에 movies.data.data.movies가 담김
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies, // == movies: movies
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">"Loading..."</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
