'use strict';

var createStore = require('redux').createStore;
var reducer = require('./reducer');

function makeStore() {
  return createStore(reducer);
}

var defaultStore = module.exports = makeStore();
module.exports.makeStore = makeStore;


defaultStore.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./data/entries.json')
});

defaultStore.dispatch({type: 'NEXT'});
