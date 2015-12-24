'use strict';

import { expect } from 'chai';
import { List, fromJS } from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });

  });

  describe('a tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = fromJS({
        movies: ['Trainspotting', '28 Days Later']
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(fromJS({
        movies: [
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        ]
      }));
      expect(state).to.equal(fromJS({
        movies: [
          'Trainspotting',
          '28 Days Later'
        ]
      }));
    });

  });

});
