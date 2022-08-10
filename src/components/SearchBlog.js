import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchPage.css";

function SearchBlog({
  id,
  description,
  title,
  bloggername,
  postdate,
  bloggerlink,
}) {
  return (
    <div className="movie">
      <a href={id} target="_blank" rel="noopener noreferrer">
        {/* <img src={poster} alt={title} titlt={title}></img> */}
        <div className="movie__data">
          <h3 className="movie__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="movie__rating">
            <span>블로그명</span> {bloggername}
          </p>
          <p className="movie__year">
            <span>내용</span>{" "}
            {description.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </p>
          <p className="movie__director">
            <span>작성일</span> {postdate}
          </p>
          <p className="movie__actor">
            <span>링크</span> {bloggerlink}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchBlog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bloggername: PropTypes.string.isRequired,
  postdate: PropTypes.string.isRequired,
  bloggerlink: PropTypes.string.isRequired,
};

export default SearchBlog;
