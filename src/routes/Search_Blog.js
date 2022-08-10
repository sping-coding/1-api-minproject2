import React from "react";
import axios from "axios";
import SearchBlog from "../components/SearchBlog";
import "./Home.css";
import "./Search.css";
import { useState } from "react";

const Search_Blog = () => {
  const [loading, setLoading] = useState(null);
  const [bloges, setBloges] = useState([]);
  const [value, setValue] = useState("");
  const ID_KEY = "9garpzEtUDr5qLavsy0E";
  const SECRET_KEY = "fL8k6FGbmS";
  const search = value;

  const getSearchBlog = async () => {
    try {
      if (search === "") {
        setLoading(false);
        setBloges([]);
      } else {
        const {
          data: { items },
        } = await axios.get("/v1/search/blog.json", {
          params: {
            query: search,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        setBloges(items);
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
    getSearchBlog();
  };

  const onClick = () => {
    getSearchBlog();
  };
  const blogList = bloges;
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
                <em>Blog</em>
              </h2>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="블로그를 검색해 보세요."
              />
              <button className="search-btn" type="submit" onClick={onClick}>
                Go!
              </button>
            </div>
            <div className="movies">
              {blogList.map((bloge) => (
                <SearchBlog
                  key={bloge.link}
                  id={bloge.link}
                  title={bloge.title}
                  description={bloge.description}
                  bloggername={bloge.bloggername}
                  postdate={bloge.postdate}
                  bloggerlink={bloge.bloggerlink}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search_Blog;
