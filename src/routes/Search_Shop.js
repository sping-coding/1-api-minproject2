import React from "react";
import axios from "axios";
import SearchShop from "../components/SearchShop";
import "./Home.css";
import "./Search.css";

import { useState } from "react";

const Search_Shop = () => {
  const [loading, setLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const getSearchShop = async () => {
    const ID_KEY = "9garpzEtUDr5qLavsy0E";
    const SECRET_KEY = "fL8k6FGbmS";
    const search = value;
    try {
      if (search === "") {
        setLoading(false);
        setProducts([]);
      } else {
        const {
          data: { items },
        } = await axios.get("/v1/search/shop.json", {
          params: {
            query: search,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        setProducts(items);
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
    getSearchShop();
  };
  const onClick = () => {
    getSearchShop();
  };

  const shopList = products;
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
                <em>Item</em>
              </h2>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="상품을 검색해 보세요."
              />
              <button className="search-btn" type="submit" onClick={onClick}>
                Go!
              </button>
            </div>
            <div className="movies">
              {shopList.map((shop) => (
                <SearchShop
                  key={shop.link}
                  id={shop.link}
                  brand={shop.brand}
                  title={shop.title}
                  img={shop.image}
                  price={shop.lprice}
                  number={shop.productId}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search_Shop;
