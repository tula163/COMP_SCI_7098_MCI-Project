import axios from './index';


// 获得推荐
export function getRecommend(data) {
  return axios.post('/api/agents/recommend/', data);
}
