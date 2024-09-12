import axios from "axios";
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_SERVER_URL}/v1`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.set("Authorization", `Bearer ${token}`);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor for handling response errors
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.data?.statusCode === 401) {
            localStorage.removeItem('token')
            return Promise.reject(error);
        }
        if (error.response?.status === 409) {
            return Promise.reject(error);
        }
        if (error.message === "Network Error") {
            return Promise.reject(error);
        }
        if (error.response.status !== 500) {
            return Promise.reject(error);
        }
    }
);


export default axiosInstance;
