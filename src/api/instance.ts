import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

apiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        config.headers.Authorization = token ? `Bearer ${token}` : null;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    },
);
