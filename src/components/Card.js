import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';


const Card = ({ movie, slider }) => (

  <div key={movie.id} className={slider ? 'swiper-slide' : ''}>
    <Link to={`/${movie.id}`}>
      <CardContainer>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <Overlay>
          <h4>
            {movie.title}
          </h4>
        </Overlay>
      </CardContainer>
    </Link>
  </div>


);

export default Card;

Card.propTypes = {

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,

  slider: PropTypes.bool,

};

Card.defaultProps = {
  slider: false,
};


const CardContainer = styled.div`
    position:relative;
    width:154px;
    height:231px;
    border-radius:5px;
`;

const Overlay = styled(CardContainer)`
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(2,0,36,1) 25%, rgba(2,0,36,0) 75%, rgba(2,0,36,0) 100%);
    opacity:0;
    transition: all 0.3s;
    transform:translateY(30px);

    &:hover{
        opacity:1;
        transform:translateY(0px);
    }

    h4, h5{
        margin: 0 0.5rem 2rem 1rem;
    }
`;

export const Poster = styled.img`
  border-radius:5px;
  width:154px;
  height:231px;
`;
