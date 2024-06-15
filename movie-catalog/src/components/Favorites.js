import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/slices/favoritesSlice';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <div>No favorite movies added</div>
      ) : (
        favorites.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Year: {movie.Year}</p>
            <button onClick={() => dispatch(removeFavorite(movie.imdbID))}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
