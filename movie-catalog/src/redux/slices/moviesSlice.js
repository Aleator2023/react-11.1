import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '64405bd2'; 


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await axios.get(`https://www.omdbapi.com?apikey=${API_KEY}&s=${query}`);
  return response.data.Search || [];
});


export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id) => {
  const response = await axios.get(`https://www.omdbapi.com?apikey=${API_KEY}&i=${id}`);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    selectedMovie: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
