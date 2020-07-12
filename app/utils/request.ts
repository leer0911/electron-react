import axios from 'axios';
import qs from 'qs';

const request = axios.create({
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      if (typeof config.data !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  async (data) => {
    return data;
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
