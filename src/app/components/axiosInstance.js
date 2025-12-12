'use client';
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || 'unexpected error';
      switch (status) {
        case 400:
          toast.error('Bad Request: ' + message);
          break;
        case 401:
          toast.error('Unauthorized: Please login again.');
          break;
        case 403:
          toast.error('Forbidden: You do not have access.');
          break;
        case 404:
          toast.error('Not Found: ' + message);
          break;
        case 500:
          toast.error('Server Error: Please try again later.');
          break;
        default:
          toast.error('Error: ' + message);
      }
    } else if (error.request) {
      toast.error('No response from server. Please check your connection.');
    } else {
      toast.error('Request error: ' + error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
