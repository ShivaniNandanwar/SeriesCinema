import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apies/MovieApi";
import { APIKey } from "../../common/Apies/MovieApikeys";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  // async () => {
  async (term) => {
    // const movieText = "Harry";
    const response = await MovieApi.get(
      // `?apiKey=${APIKey}&s=${movieText}&type=movie`
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  // async () => {
  async (term) => {
    // const seriesText = "Friends";
    const response = await MovieApi.get(
      // `?apiKey=${APIKey}&s=${seriesText}&type=series`
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  // selectMovieOrShow: {},
  showDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, series: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, showDetails: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrShow = (state) => state.movies.showDetails;
