// MovieList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    getData()
  });

 const  getData=async()=>{
  await  axios.get('http://localhost:3000/movies').then((response) => {
    setMovies(response.data);
    console.log("res",response)
  });
 }

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
