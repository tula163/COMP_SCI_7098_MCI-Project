import axios from './index';

// 查询所有
export function getAllRequirements() {
  return axios.get('/requirements'); 
}

// 新增
export function addRequirement(data) {
  return axios.post('/requirements/add', data); 
}
