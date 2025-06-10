// import axios from './index';

import api from './index';



export const getRecommend = async (payload) => {
  return api.post('/api/agents/recommend/', payload);
};




// get pagenagation agent list
export function getAgentsWithPage(params) {
  return api.get('/api/agents/',{params});
}


// get pagenagation agent list
export function getAgentsAll(data) {
  return api.post('/api/agents/all/',data);
}