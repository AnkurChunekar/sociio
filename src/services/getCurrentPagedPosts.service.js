import axios from "axios";

export const getCurrentPagedPosts = async (pageNum) => {
  try {
    const response = await axios.get(`/api/posts/page/${pageNum}`);
    if (response.status === 200) {
      const posts = response.data.posts;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
};
