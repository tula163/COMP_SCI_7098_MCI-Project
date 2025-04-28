import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // 后端Spring Boot服务地址
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
