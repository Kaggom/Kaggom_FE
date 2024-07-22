import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});