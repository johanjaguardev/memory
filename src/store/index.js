import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@redux";
import { counterSlice } from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
