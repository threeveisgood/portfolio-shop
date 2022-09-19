import { combineReducers } from "@reduxjs/toolkit";
import comment from "slices/comment";
import write from "slices/write";

const rootReducer = combineReducers({
  comment,
  write,
});

export default rootReducer;
