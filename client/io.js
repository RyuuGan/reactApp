import io from 'socket.io-client';
import store from './store'

import { setState } from './actionCreators'

const socket = io(`${location.protocol}//${location.hostname}:${location.port}`);

export default socket;

socket.on('state', state =>
  store.dispatch(setState(state))
);
