/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import './App.css';

import MoviesList from './components/MoviesList';
import Moviedetail from './components/Moviedetail';


const App = () => (

  <Router basename="/">
    <div className="App">

      <AppHeader>
        <Link to="/">
          <h1>movies</h1>
        </Link>
      </AppHeader>

      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={Moviedetail} />
      </Switch>

    </div>
  </Router>

);

export default App;

const AppHeader = styled.header`
  background-color: #111;
  height:60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #EEE;

  a{
    color:inherit;
    text-decoration:none;
    font-size:1rem;
  }
`;
