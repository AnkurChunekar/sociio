import axios from "axios";

export const getUserService = async (username, setterFn) => {
  try {
    const response = await axios.get(`/api/users/${username}`);
    if(response.status === 200) {
      setterFn(response.data.user);
    }
  } catch (error) {
    console.error(error);
  }
};
