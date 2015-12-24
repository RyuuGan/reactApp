import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';
import socket from './io'
import store from './store'

require('./styles.css');

const routes =
  <Route component={App}>
    <Route path="/" component={VotingContainer}/>
    <Route path="/results" component={ResultsContainer}/>
  </Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{ routes }</Router>
  </Provider>,
  document.getElementById('app')
);
