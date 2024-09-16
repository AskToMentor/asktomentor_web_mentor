import axios from "axios";
import { serverUrl } from "../api-config/config";
import ShowErrorMessages from "../alert-messages/ShowErrorMessages";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.platform = "web";
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("axiosInstance response error", error);
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to sign-in page
      window.location.href = "/";
      localStorage.removeItem("token");
    }
    // if (error.response && error.response.status === 400) {
    //   console.log("---------- inside");
    //   const errorMessage = !error.response.data.error.message
    //     ? error.response.data.error?._message
    //     : error.response.data.error.message;
    //   ShowErrorMessages(errorMessage, "Error");
    // }
    throw error;
  }
);

export default axiosInstance;
