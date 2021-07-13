import axios from 'axios';
import { APIRoute } from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

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
    {
      if (!error.response) {
        return new Promise((resolve, reject) =>
        {
          reject(error);
        });
      }

      if (error.response.status === HttpCode.UNAUTHORIZED) {
        localStorage.removeItem('token');

        if (history) {
          history.push(APIRoute.LOGIN);
        } else {
          window.location = APIRoute.LOGIN;
        }
      } else {
        return new Promise((resolve, reject) =>
        {
          reject(error);
        });
      }
    },
  );

  return axiosInstance;
};
