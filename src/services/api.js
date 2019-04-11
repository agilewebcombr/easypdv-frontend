import axios from 'axios';

const api = axios.create({
  baseURL: 'http://easypdv.herokuapp.com/'
});

export default api;