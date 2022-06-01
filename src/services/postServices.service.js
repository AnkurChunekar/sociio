import axios from "axios";

export const getAllPostsService = async (setterFn) => {
  try {
    const response = await axios.get("/api/posts");
      if(response.status === 200) {
          setterFn(response.data.posts);
      }
  } catch (error) {
    console.error(error);
  }
};

export const getUserPostsService = async (username, setterFn) => {
  try {
    // "/posts/user/:username"
    const response = await axios.get(`/api/posts/user/${username}`);
      if(response.status === 200) {
          setterFn(response.data.posts);
      }
  } catch (error) {
    console.error(error);
  }
};

