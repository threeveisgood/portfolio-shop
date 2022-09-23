import { combineReducers } from "@reduxjs/toolkit";
import comment from "slices/comment";
import write from "slices/write";
import modal from "slices/modal";

const rootReducer = combineReducers({
  comment,
  write,
  modal,
});

export default rootReducer;
