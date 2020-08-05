import {createStore, applyMiddleware} from 'redux'
import RootReducers from './RootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;