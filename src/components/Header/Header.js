import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
