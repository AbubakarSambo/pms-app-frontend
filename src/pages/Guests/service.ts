import axiosInstance from "../../api/axiosInstance";

export const fetchGuests = async (orgId?: string) => {
  try {
    const response = await axiosInstance.get(`/guests?orgId=${orgId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createGuestApi = async (data: any, orgId: string) => {
  try {
    const response = await axiosInstance.post(`/guests`, {
      ...data,
      organizationId: orgId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
