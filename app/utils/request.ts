import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  async (data) => {
    return data.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 500) {
        console.log('服务器错误，请联系管理员处理');
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default request;
