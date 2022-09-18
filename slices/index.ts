import { combineReducers } from "@reduxjs/toolkit";
import commentReducer from "slices/comment";
import writeReducer from "slices/write";

const rootReducer = combineReducers({
  commentReducer,
  writeReducer,
});

export default rootReducer;
