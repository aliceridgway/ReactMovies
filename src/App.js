import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MoviesList from './components/MoviesList';
import Moviedetail from './components/Moviedetail';
import Layout from './components/Layout';

const App = () => (
  <Router basename="/">
    <Layout>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={Moviedetail} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
