import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MoviesDetails';
import WatchList from './pages/WatchList';

const movie = {
  id: 1,
  title: "The Shawshank Redemption",
  year: 1994,
  genre: ["Drama"],
  rating: 9.3,
  director: "Frank Darabont",
  actors: ["Tim Robbins", "Morgan Freeman"],
  plot:
    "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  poster: "https://placehold.co/220x360",
  trailer: "https://example.com/shawshank_redemption_trailer.mp4",
  runtime: 142,
  awards: "Nominated for 7 Oscars",
  country: "USA",
  language: "English",
  boxOffice: "$28.3 million",
  production: "Columbia Pictures",
  website: "http://www.warnerbros.com/movies/shawshank-redemption",
};

function App() {
 
  return (
    <>
       <Navbar/>
       <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/movies" element = {<MovieList/>}></Route>
          <Route path="/movies/:id" element = {<MovieDetails movie={movie}/>}></Route>
          <Route path="/watchlist" element = {<WatchList/>}></Route>
       </Routes>
    </>
  )
}

export default App
