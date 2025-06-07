import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器（可以添加 token）
instance.interceptors.request.use(
  (config) => {
    // 可在此添加请求头等逻辑
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器（统一处理响应码）
instance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'request fail'));
    }

    return res.data; // 成功返回实际数据
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
