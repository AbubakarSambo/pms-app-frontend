import { toaster } from "evergreen-ui";
import axiosInstance from "../../api/axiosInstance";
import { er } from "@fullcalendar/core/internal-common";

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
  } catch (error: any) {
    toaster.danger(error.response.data.message);
  }
};

export const fetchReservations = async (propertyId: string) => {
  try {
    const response = await axiosInstance.get(
      `/reservations?propertyId=${propertyId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReservation = async (data: any, id: string) => {
  try {
    const response = await axiosInstance.patch(`/reservations/${id}`, data);
    return response.data;
  } catch (error: any) {
    toaster.danger(error.response.data.message);

    return error;
  }
};

export const deleteReservation = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/reservations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReservationById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/reservations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
