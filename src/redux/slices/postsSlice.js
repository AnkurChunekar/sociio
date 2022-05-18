import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  getAllPosts,
  deletePost,
  editPost,
  likePost,
  dislikePost,
  removePostFromBookmark,
  bookmarkPost,
} from "redux/asyncThunks";

const initialState = {
  posts: [],
  status: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [createPost.pending]: (state) => {
      state.status = "loading"
    },
    [createPost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [deletePost.pending]: (state) => {
      state.status = "loading"
    },
    [deletePost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [editPost.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [editPost.pending]: (state) => {
      state.status = "loading"
    },
    [editPost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [getAllPosts.pending]: (state) => {
      state.status = "loading"
    },
    [getAllPosts.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [likePost.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [likePost.pending]: (state) => {
      state.status = "loading"
    },
    [likePost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.posts = action.payload.data.posts;
    },
    [dislikePost.pending]: (state) => {
      state.status = "loading"
    },
    [dislikePost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [bookmarkPost.fulfilled]: (state) => {
      state.status = "succeeded"
    },
    [bookmarkPost.pending]: (state) => {
      state.status = "loading"
    },
    [bookmarkPost.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
    [removePostFromBookmark.fulfilled]: (state) => {
      state.status = "succeeded"
    },
    [removePostFromBookmark.pending]: (state) => {
      state.status = "loading"
    },
    [removePostFromBookmark.rejected]: (state, action) => {
      state.status = "failed"
      console.error(action);
    },
  },
});

export default postsSlice.reducer;
