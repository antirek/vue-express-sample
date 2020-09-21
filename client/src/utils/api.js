import axios from 'axios';
import store from './../store';

const baseUrl = 'http://localhost:3000';

const apiCall = {
  get: async (url) => {
    const reqUrl = baseUrl + url;
    const token = store.getters.token;
    console.log('url', url, reqUrl);
    return await axios.get(reqUrl, {
      headers: {
        'API-Token': token,
      }
    });
  },
  post: async (url, data) => {
    const reqUrl = baseUrl + url;
    const token = store.getters.token;
    return await axios.post(reqUrl, data, {
      headers: {
        'API-Token': token,
      }
    });
  }
}

export default apiCall;
