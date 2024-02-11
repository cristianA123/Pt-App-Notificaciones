import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL

export const apiService: AxiosInstance = axios.create({
  baseURL: `${baseUrl}`,
});

export interface Session {
  token: string;
  isExpandedSidebar?: boolean;
}

const token =  localStorage.getItem('token') || '';

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(config)
    return config;
  }
);
