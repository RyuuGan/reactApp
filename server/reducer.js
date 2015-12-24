'use strict';

var core = require('./core')
  , setEntries = core.setEntries
  , next = core.next
  , vote = core.vote
  , INITIAL_STATE = core.INITIAL_STATE;

module.exports = function reducer(state, action) {
  if (!state) state = INITIAL_STATE;
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return state.update('vote', voteState => vote(voteState, action.entry))
  }
  return state;
};
