import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com", // Replace with your real API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;