import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import MovieApi from "../../common/Apies/MovieApi";
// import { APIKey } from "../../common/Apies/MovieApikeys";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Home = () => {
  // const movieText = "Harry";
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";

  useEffect(() => {
    // const fetchMovies = async () => {
    //   try {
    //     const response = await MovieApi.get(
    //       `?apiKey=${APIKey}&s=${movieText}&type=movie`
    //     );
    //     // console.log("The response from API:", response);
    //     dispatch(addMovies(response.data));
    //   } catch (err) {
    //     console.error("Error:", err);
    //   }
    // };

    // fetchMovies();

    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
