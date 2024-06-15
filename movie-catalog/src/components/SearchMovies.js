import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchMovieById } from '../redux/slices/moviesSlice';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [isIdSearch, setIsIdSearch] = useState(false);
  const dispatch = useDispatch();
  const { items, selectedMovie, status } = useSelector((state) => state.movies);

  const handleSearch = () => {
    if (isIdSearch) {
      dispatch(fetchMovieById(query));
    } else {
      dispatch(fetchMovies(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <label>
        <input
          type="checkbox"
          checked={isIdSearch}
          onChange={(e) => setIsIdSearch(e.target.checked)}
        />
        Search by ID
      </label>
      <button onClick={handleSearch}>Search</button>
      <Link to="/favorites">
        <button>Go to Favorites</button>
      </Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed to load movies</div>}
      {status === 'succeeded' && isIdSearch && selectedMovie && (
        <MovieDetail movie={selectedMovie} />
      )}
      {status === 'succeeded' && !isIdSearch && items.length === 0 && <div>No movies found</div>}
      <div>
        {!isIdSearch && items && items.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
