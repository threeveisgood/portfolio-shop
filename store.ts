import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  StoreEnhancer,
} from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";

import write from "modules/write";
import comment from "modules/comment";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<any, any> = () => {
  const rootReducer = combineReducers({ write, comment });

  const store = createStore(rootReducer, bindMiddleware([]));

  return store;
};

export const wrapper = createWrapper<any, any>(makeStore, { debug: true });
