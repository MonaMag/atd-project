import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localstorage';

export const $api = axios.create({
  baseURL: 'http://192.168.233.153:8080/api/v1',
  withCredentials: true,
  headers: {
    ContentType: 'application/json',
  },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
