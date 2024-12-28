import axiosInstance from "../../api/axiosInstance";
import { ICreateRoomModal } from "./CreateRoomModal";

export const createRoomApi = async (data: ICreateRoomModal) => {
  try {
    console.log({ data });
    const response = await axiosInstance.post("/rooms", {
      ...data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
