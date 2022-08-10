import React from "react";
import { Routes, Route } from "react-router-dom";
import Search_Movie from "./routes/Search_Movie";
import Search_Shop from "./routes/Search_Shop";
import Search_Book from "./routes/Search_Book";
import Menu from "./pages/Menu";
import "./App.css";
import Search_Blog from "./routes/Search_Blog";
import Image from "./mainimage.png";

const App = () => {
  return (
    <div>
      <div className="header">
        <img className="mainImage" src={Image} />
        {/* <h1 className="MainTitle">Happy API</h1> */}
      </div>
      <div className="main">
        <div className="nav">
          <Menu />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Search_Movie />} />
            <Route path="/Shop" exact={true} element={<Search_Shop />} />
            <Route path="/Image" exact={true} element={<Search_Blog />} />
            <Route path="/Book" exact={true} element={<Search_Book />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
