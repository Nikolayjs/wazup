import axios from 'axios';

const axiosClassic = axios.create({
  baseURL: 'https://api.green-api.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClassic;
