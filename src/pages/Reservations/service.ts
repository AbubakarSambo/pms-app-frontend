import axiosInstance from "../../api/axiosInstance";

export const fetchRooms = async (propertyId?: string) => {
  try {
    const response = propertyId
      ? await axiosInstance.get(`/rooms?propertyId=${propertyId}`)
      : await axiosInstance.get("/rooms");
    return response.data;
  } catch (error) {
    throw error;
  }
};
