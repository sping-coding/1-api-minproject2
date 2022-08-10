import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchPage.css";

function SearchBook({ id, title, img, author, publisher, pubdate }) {
  return (
    <div className="movie">
      <a href={id} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} titlt={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <hr />
          <p className="movie__rating">
            <span>저자</span> {author}
          </p>
          <p className="movie__director">
            <span>출판사</span> {publisher}
          </p>
          <p className="movie__actor">
            <span>출간일</span> {pubdate}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pubdate: PropTypes.string.isRequired,
};

export default SearchBook;
