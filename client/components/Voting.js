import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../actionCreators';

export const Voting = React.createClass({
  mixins: [
    PureRenderMixin
  ],
  render: function () {
    return <div className="voting">
      {
        this.props.winner ?
          <Winner ref="winner" winner={ this.props.winner}/> :
          <Vote {...this.props} />
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
