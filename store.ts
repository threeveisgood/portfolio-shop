import { applyMiddleware, combineReducers, createStore, Middleware, StoreEnhancer } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import write from 'modules/write'
import comment from 'modules/comment'

import rootSaga from './saga';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<any, any> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({ write, comment })

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<any, any>(makeStore, { debug: true });