import axios from "axios";

// Base Axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8001/api", // رابط الـ API
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor لإرسال token تلقائيًا لو موجود
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});




export default axiosInstance;
