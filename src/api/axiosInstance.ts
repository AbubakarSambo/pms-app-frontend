// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN || "http://localhost:3001", // Base URL of your NestJS API
  timeout: 10000, // Timeout after 10 seconds
  withCredentials: true, // Necessary if you're using cookies for auth
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
