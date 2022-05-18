import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get("/api/users");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const followUser = createAsyncThunk(
  "users/follow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
