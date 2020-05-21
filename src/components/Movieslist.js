/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './movie';

class Movieslist extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=49351c46224cf6108890d28e7e5f0d50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);

      this.setState({
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}

export default Movieslist;

const MovieGrid = styled.div` 
  display:grid;
  padding:1rem;
  grid-template-columns:repeat(6,1fr);
  grid-row-gap:1rem;

`;
