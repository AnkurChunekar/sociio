import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers,  followUser, unfollowUser } from "redux/asyncThunks";

const initialState = {
  usersData: [],
  status: "idle",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.usersData = action.payload.data.users;
      state.status = "succeeded";
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action);
    },
    [followUser.pending]: (state) => {
      state.status = "loading";
    },
    [followUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload.data.users;
    },
    [followUser.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action.payload.data.errors[0]);
    },
    [unfollowUser.pending]: (state) => {
      state.status = "loading";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload.data.users;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export default usersSlice.reducer;
