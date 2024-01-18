import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
};

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 300000,
  headers: HEADERS,
});

export default AxiosInstance;
