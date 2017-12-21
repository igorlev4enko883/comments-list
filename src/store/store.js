import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import {reducers} from './reducers/reducers';

export const initialState = {};

const Store = createStore(
  combineReducers({
    routing: routerReducer,
    state: reducers
  }),
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      routerMiddleware(hashHistory),
      thunk
      )
  )
);

export default Store;
