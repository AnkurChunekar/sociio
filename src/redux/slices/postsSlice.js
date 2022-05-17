import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPosts, deletePost, editPost } from "redux/asyncThunks";

const initialState = {
  posts: [],
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.posts = action.payload.data.posts;
    },
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
  },
});

export default postsSlice.reducer;
