import axiosInstance from "../../api/axiosInstance";
import { ICreatePropertyModal } from "./CreatePropertyModal";

export const createPropertyApi = async (
  data: ICreatePropertyModal,
  organizationId: string
) => {
  try {
    const response = await axiosInstance.post("/properties", {
      ...data,
      organizationId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
