import { Link } from "react-router-dom";
import React from "react";
import "./Menu.css";
import Image1 from "./subImage1.png";
import Image2 from "./subImage2.png";

const Menu = () => {
  return (
    <div className="menuBar">
      <br />
      <br />
      <ul>
        <li>
          <Link to="/" className="menu">
            영화
          </Link>
        </li>
        <li>
          <Link to="/Shop" className="menu">
            쇼핑
          </Link>
        </li>
        <li>
          <Link to="/Image" className="menu">
            블로그
          </Link>
        </li>
        <li>
          <Link to="/Book" className="menu">
            책
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
