/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import './App.css';

import Movieslist from './components/Movieslist';
import Moviedetail from './components/Moviedetail';


const App = () => (

  <Router>
    <div className="App">

      {/* <header className="App-header"> */}
      <AppHeader>
        <Link to="/">
          <h1>movies</h1>
        </Link>
      </AppHeader>

      {/* </header> */}

      <Switch>
        <Route exact path="/" component={Movieslist} />
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
