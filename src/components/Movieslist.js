
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Movie from './movie';


const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const moviesList = await res.json();
      setMovies(moviesList.results);
    };
    fetchMovies();
  }, []);


  return (
    <MovieGrid>
      {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
    </MovieGrid>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.number,
    }),
  }),
};

MoviesList.defaultProps = {
  match: {
    params: {
      page: 1,
    },
  },
};

const MovieGrid = styled.div` 
  display:grid;
  padding:1rem;
  grid-template-columns:repeat(5,auto);
  grid-row-gap:1rem;

`;
