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
