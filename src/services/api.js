import axios from 'axios';

const api = axios.create({
  baseURL: 'https://easypdv.herokuapp.com/'
});

export default api;