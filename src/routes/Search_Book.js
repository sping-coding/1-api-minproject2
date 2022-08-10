import React from "react";
import axios from "axios";
import SearchBook from "../components/SearchBook";
import "./Home.css";
import "./Search.css";
import { useState } from "react";

const Search_Book = () => {
  const [loading, setLoading] = useState(null);
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("");

  const getSearchBook = async () => {
    const ID_KEY = "9garpzEtUDr5qLavsy0E";
    const SECRET_KEY = "fL8k6FGbmS";
    const search = value;
    try {
      if (search === "") {
        setLoading(false);
        setBooks([]);
      } else {
        const {
          data: { items },
        } = await axios.get("/v1/search/book.json", {
          params: {
            query: search,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        setBooks(items);
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
    getSearchBook();
  };

  const onClick = () => {
    getSearchBook();
  };
  const bookList = books;
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
                <em>Book</em>
              </h2>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="책을 검색해 보세요."
              />
              <button className="search-btn" type="submit" onClick={onClick}>
                Go!
              </button>
            </div>
            <div className="movies">
              {bookList.map((book) => (
                <SearchBook
                  key={book.link}
                  id={book.link}
                  title={book.title} //제목
                  img={book.image} //이미지-url
                  author={book.author} //저자
                  publisher={book.publisher} //출판사
                  pubdate={book.pubdate} //출간일 정보
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search_Book;
