import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: '/',
    headers: { Accept: "application/json" },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
    }
);