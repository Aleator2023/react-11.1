import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/slices/favoritesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <button onClick={() => dispatch(addFavorite(movie))}>Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
