
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Inner from './Inner';
import Card from './Card';
import Logo from './Logo';
import PopularMovies from './PopularMovies';

import Pagination from './pagination';
import background from '../images/background_w1980.jpg';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage + 1}`);
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
      <Background src={background} />

      <Logo />
      {(currentPage === 1) && (
      <PopularMovies APIString="https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1">
        <h2>Trending Movies</h2>
      </PopularMovies>
      ) }


      <Inner>
        {(currentPage === 1) && <h2>More great movies...</h2>}
        <MovieGrid>
          {movies.map((movie) => (<Card key={movie.id} movie={movie} />))}
        </MovieGrid>
        <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
      </Inner>

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
  display:flex;
  flex-wrap:wrap;
  
  >div{
    margin: 0rem 1rem 1rem 0;
  }

`;
const Background = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  object-fit:contain;
  z-index:-1;
`;
