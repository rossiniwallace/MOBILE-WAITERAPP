import axios from 'axios';

export const api = axios.create({
  baseURL:'https://waiter-app-api-s9yw.onrender.com',
});
