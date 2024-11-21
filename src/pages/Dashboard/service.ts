import axiosInstance from "../../api/axiosInstance";

export const test = async () => {
  try {
    const response = await axiosInstance.get("/test");
    return response.data;
  } catch (error) {
    throw error;
  }
};
