import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // ✅ Make sure the path and spelling are correct

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer, // ✅ No syntax errors here
  },
});

export default appStore;
