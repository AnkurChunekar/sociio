import { configureStore } from "@reduxjs/toolkit";
import authReducer from "redux/slices/authSlice";
import usersReducer from "redux/slices/usersSlice";

export const store = configureStore({
  reducer: { auth: authReducer, users: usersReducer },
});
