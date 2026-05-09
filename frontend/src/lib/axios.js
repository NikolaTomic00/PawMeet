import axios from "axios";

export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://pawmeet.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
