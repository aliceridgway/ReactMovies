import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import { Poster } from './movie';

import placeholderBackdrop from '../placeholder_backdrop_w1280.jpg';
import placeholderPoster from '../placeholder_poster_w154.jpg';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [backdrop, setBackdrop] = useState(placeholderBackdrop);
  const [poster, setPoster] = useState(placeholderPoster);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US`);
        const result = await res.json();
        setMovie(result);
        setBackdrop(BACKDROP_PATH + result.backdrop_path);
        setPoster(POSTER_PATH + result.poster_path);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  return (

    <MovieWrapper backdrop={backdrop}>
      <MovieInfo>

        <Overdrive id={match.params.id}>
          <Poster src={poster} alt={movie.title} />
        </Overdrive>

        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>

      </MovieInfo>

    </MovieWrapper>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MovieDetail.defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
};

const MovieWrapper = styled.div`
    position:relative;
    padding-top:50vh;
    background: url(${(props) => props.backdrop}) no-repeat;
    background-size:cover;
`;

const MovieInfo = styled.div`
    background:white;
    text-align:left;
    padding:2rem 10%;
    display:flex;
    color:black;

    > div{
        margin-left:4rem;
    }

    img{
        position:relative;
        top:-5rem;
    }
`;
