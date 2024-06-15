import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
};

export default MovieDetail;
