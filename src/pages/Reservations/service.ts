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

export const createReservation = async (data: any) => {
  try {
    const response = await axiosInstance.post(`/reservations`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReservations = async (propertyId: string) => {
  try {
    const response = await axiosInstance.get(`/reservations/${propertyId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
