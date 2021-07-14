import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const token = localStorage.getItem('token') ?? '';

export const getAxiosInstance = (history = null) => {

  const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) =>
      {
        resolve(response);
      }),
    (error) =>
      new Promise((resolve, reject) => {
        reject(error);
      }),
  );

  return axiosInstance;
};
