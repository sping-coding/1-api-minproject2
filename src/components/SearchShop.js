import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchPage.css";

function SearchShop({ id, brand, title, img, price, number }) {
  return (
    <div className="movie">
      <a href={id} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} titlt={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="movie__rating">
            <span>최저가</span> {price}
          </p>
          <p className="movie__year">
            <span>브랜드</span> {brand}
          </p>
          <p className="movie__director">
            <span>상품번호</span> {number}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchShop.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default SearchShop;
