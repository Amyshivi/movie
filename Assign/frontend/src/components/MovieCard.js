// MovieCard.js
import React from 'react';

function MovieCard({ movie }) {

  const imageLinks = [
    { id: 1, src: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', alt: 'Image 3' },
  ];
  
  return (
    <div className="movie-card"> 
      <h3>{movie.title}</h3>
      {
        imageLinks.map((image)=>{
          return (
            <img
            className="movie-poster"
            key={image.id} src={image.src}
            alt={`${movie.name} Poster`}
          />
          )
         
          }
        )
      }
    
      <div className="movie-details">
      
        <p className="movie-rating">Rating: {movie.rating}</p>
        <p className="movie-released-date">Released Date: {movie.releasedDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
