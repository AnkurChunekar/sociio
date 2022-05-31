import axios from "axios";

export const getCurrentPagedPosts = async (pageNum) => {
  try {
    const response = await axios.get(`/api/posts/page/${pageNum}`);
    if (response.status === 200) {
      const posts = response.data.posts;
      if (posts.length > 0) {
        return posts;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.error(error);
  }
};
