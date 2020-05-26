import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from './Slider';
import Card from './Card';

const PopularMovies = ({ children, APIString }) => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    console.log('Popular');
    const fetchMovies = async () => {
      const res = await fetch(APIString);
      const response = await res.json();
      console.log(response);
      setPopular(response.results);
    };
    fetchMovies();
  }, [APIString]);

  return (
    <Wrapper>
      {children}
      <Slider>
        {popular.map((movie) => (<Card slider key={movie.id} movie={movie} />))}
      </Slider>
    </Wrapper>
  );
};

export default PopularMovies;

PopularMovies.propTypes = {
  APIString: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
    width:90vw;
    margin-left:10vw;
`;
