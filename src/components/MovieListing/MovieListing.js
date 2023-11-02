import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./movielisting.scss";
import Slider from "react-slick";
import { Setting } from "../../common/Apies/Settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  console.log(movies);
  let renderMovies,
    renderSeries = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="series-error">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="series-list">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
