import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the counter slice
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter slice to the store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add logger middleware
});

//export type RootState = ReturnType<typeof store.getState>; // Type for the root state
//export type AppDispatch = typeof store.dispatch; // Type for the dispatch function

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
