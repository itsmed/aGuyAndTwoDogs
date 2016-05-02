import {
  applyMiddleware,
  compose,
  createStore
}                             from 'redux';
import thunk                  from 'redux-thunk';
import { routerMiddleware }   from 'react-router-redux';

import rootReducer            from '../src/reducers/index';


export default function configureStore(initialState) {

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}