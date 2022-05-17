import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "redux/asyncThunks";

const initialState = {
  usersData: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.usersData = action.payload.data.users;
    },
    [getAllUsers.rejected]: (action) => {
      console.error(action);
    },
  },
});

export default usersSlice.reducer;
