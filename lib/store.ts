import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "slices";

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
