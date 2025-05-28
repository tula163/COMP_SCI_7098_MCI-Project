import axios from './index';

// 查询所有
export function getAllRequirements() {
  return axios.get('/requirements'); 
}

// 新增
export function addRequirement(data) {
  return axios.post('/requirements/add', data); 
}


// 提交问卷数据
export function submitQuestions(data) {
  return axios.post('/api/submit', data);
}



// 获得推荐
export function getRecommend(data) {
  return axios.post('/api/agent/recommend', data);
}
