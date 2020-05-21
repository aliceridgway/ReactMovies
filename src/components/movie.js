import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div key={movie.id}>
    <Link to={`/${movie.id}`}>
      <Overdrive id={movie.id}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Overdrive>
    </Link>

  </div>
);


Movie.propTypes = {

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,

};

export default Movie;

export const Poster = styled.img`
  box-shadow: 7px 4px 7px 0px rgba(10,10,10,1);
`;
