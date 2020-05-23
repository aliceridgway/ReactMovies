
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Movie from './movie';

import Pagination from './pagination';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    console.log('useEffect');
    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`);
      const response = await res.json();
      console.log(response);
      setMovies(response.results);
      setTotalPages(response.total_pages);
    };
    fetchMovies();
  }, [currentPage]);

  const paginate = (page) => setCurrentPage(page);

  return (
    <>
      <MovieGrid>
        {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
      <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
    </>
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
