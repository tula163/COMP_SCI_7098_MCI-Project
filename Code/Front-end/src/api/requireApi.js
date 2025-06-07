// import axios from './index';

import api from './index';


// 获得推荐
// export function getRecommend(data) {
//   return axios.post('/api/agents/recommend/', data);
// }


export const getRecommend = async (payload) => {
  return api.post('/api/agents/recommend/', payload);
};