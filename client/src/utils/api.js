import axios from 'axios';



const apiCall = {
  get: async (url) => {
    const token = localStorage.getItem('user-token');
    const reqUrl = 'http://localhost:3000' + url;
    return await axios.get(reqUrl, {headers: {'API-Token': token}});
  },
  post: async (url, data) => {
    const token = localStorage.getItem('user-token');
    const reqUrl = 'http://localhost:3000' + url;
    return await axios.post(reqUrl, data, {headers: {'API-Token': token}});
  }
}
 
export default apiCall;
