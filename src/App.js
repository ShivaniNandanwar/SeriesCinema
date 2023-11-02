import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetails} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
