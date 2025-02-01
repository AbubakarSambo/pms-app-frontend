import axiosInstance from "../api/axiosInstance";

export const fetchRoles = async () => {
  try {
    const response = await axiosInstance.get("/roles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProperties = async (orgId: string) => {
  try {
    const response = await axiosInstance.get(`/properties?orgId=${orgId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
