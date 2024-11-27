import axios from "axios";
import { API_URL } from "./Api.config";
// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate();

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem("token") || "null");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);

export default api;
