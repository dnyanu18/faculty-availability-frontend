/*// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://faculty-availability-backend.onrender.com/api",
});

export default API;
*/
import axios from "axios";

const API = axios.create({
  baseURL: "https://faculty-availability-backend.onrender.com/api", // Update with your backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
