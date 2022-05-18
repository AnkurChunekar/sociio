import { createSlice } from "@reduxjs/toolkit";
import { login, signup, editUser, getAuthUser } from "redux/asyncThunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.isLoading = false;
    },
    setAuthLoading: (state) => {
      state.isLoading = true;
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [editUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [getAuthUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [getAuthUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getAuthUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
  },
});

export const { logout, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;
