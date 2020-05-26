import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card, { Poster } from './Card';
import Header from './Header';
import Slider from './Slider';
import Inner, { InnerContainer } from './Inner';

import placeholderBackdrop from '../images/placeholder_backdrop_w1280.jpg';
import placeholderPoster from '../images/placeholder_poster_w154.jpg';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [related, setRelatedMovies] = useState([]);
  const [backdrop, setBackdrop] = useState(placeholderBackdrop);
  const [poster, setPoster] = useState(placeholderPoster);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('movie detail use effect');
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
  }, [match.params.id]);

  useEffect(() => {
    const relatedMovies = async () => {
      try {
        const genreID = movie.genres[0].id;
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&include_adult=false&include_video=false&page=1&year=2020&with_genres=${genreID}`);
        const response = await res.json();
        const moviesOfGenre = response.results.filter((item) => !(item.id === movie.id));
        setRelatedMovies(moviesOfGenre.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    relatedMovies();
  }, [movie.id]);

  return (

    <MovieWrapper backdrop={backdrop}>
      <Header />
      <MovieInfo>
        <InnerFlex>
          <Poster src={poster} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
          </div>
        </InnerFlex>
      </MovieInfo>

      <Inner>
        <h2>You might also like...</h2>
        <Slider>
          {related.map((film) => (
            <Card swiper key={film.id} movie={film} />
          ))}
        </Slider>
      </Inner>

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
    width:100vw;
    padding-top:50vh;
    background: url(${(props) => props.backdrop}) no-repeat;
    background-size:100vw;
`;

const InnerFlex = styled(InnerContainer)`
  display:flex;

  > div{
        margin-left:4rem;
        p{
          max-width:500px;
        }
    }

    img{
        position:relative;
        top:-2rem;
    }
`;

const MovieInfo = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(3,3,3,1) 0%, rgba(3,3,3,1) 50%, rgba(3,3,3,0) 100%);
    text-align:left;
    padding:4rem 0;
    display:flex;
    color:white;
`;
