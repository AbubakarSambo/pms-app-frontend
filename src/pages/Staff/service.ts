import axiosInstance from "../../api/axiosInstance";
import { ICreateStaff } from "./CreateStaffModal";

export const createUserApi = async (data: ICreateStaff) => {
  try {
    const response = await axiosInstance.post("/users/admin", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStaff = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};
