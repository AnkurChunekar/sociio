import { configureStore } from "@reduxjs/toolkit";
import authReducer from "redux/slices/authSlice";
import usersReducer from "redux/slices/usersSlice";
import postsReducer from "redux/slices/postsSlice";

export const store = configureStore({
  reducer: { auth: authReducer, users: usersReducer, posts: postsReducer },
});
