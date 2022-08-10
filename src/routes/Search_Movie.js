import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";
import { useState } from "react";

const Search_Movie = () => {
  const [loading, setLoading] = useState(null);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const ID_KEY = "9garpzEtUDr5qLavsy0E";
  const SECRET_KEY = "fL8k6FGbmS";
  const search = value;

  const getSearchMovie = async () => {
    try {
      if (search === "") {
        setLoading(false);
        setMovies([]);
      } else {
        const {
          data: { items },
        } = await axios.get("/v1/search/movie.json", {
          params: {
            query: search,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        setMovies(items);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovie();
  };
  const onClick = () => {
    getSearchMovie();
  };

  const movieList = movies;
  const isLoading = loading;

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input_div">
              <h2 className="title">
                <em>Movie</em>
              </h2>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="영화를 검색해 보세요."
              />
              <button className="search-btn" type="submit" onClick={onClick}>
                Go!
              </button>
            </div>
            <div className="movies">
              {movieList.map((movie) => (
                <SearchMovie
                  key={movie.link}
                  id={movie.link}
                  year={movie.pubDate}
                  title={movie.title}
                  poster={movie.image}
                  rating={movie.userRating}
                  director={movie.director}
                  actor={movie.actor}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search_Movie;
