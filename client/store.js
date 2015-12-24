import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import remoteMiddleware from './middleware/remote';

let createStoreWithMiddleware = applyMiddleware(remoteMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);
export default store;
