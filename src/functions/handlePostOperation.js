import axios from "axios";
import { BASE_URL } from "../constants/constants";

const handlePostOperation = async (url, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { handlePostOperation };
