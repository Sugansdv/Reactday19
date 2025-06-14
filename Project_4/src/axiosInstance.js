import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://684cdede65ed08713914761f.mockapi.io", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;