//import apiCall from "../../api/client";

import axios from 'axios';

const state = {
  token: localStorage.getItem("api-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  AUTH_REQUEST: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST');
      axios.post("http://localhost:3000/login", user)
        .then(resp => {
          console.log(resp);
          localStorage.setItem("api-token", resp.data.token);

          // Here set the header of your ajax library to the token value.
          // example with axios
          // axios.defaults.headers.common['Authorization'] = resp.token
          commit('AUTH_SUCCESS', resp);
          dispatch('USER_REQUEST');
          resolve(resp);
        })
        .catch(err => {
          commit('AUTH_ERROR', err);
          localStorage.removeItem("api-token");
          reject(err);
        });
    });
  },
  AUTH_LOGOUT: ({ commit }) => {
    return new Promise(resolve => {
      commit('AUTH_LOGOUT');
      localStorage.removeItem("api-token");
      resolve();
    });
  }
};

const mutations = {
  AUTH_REQUEST: state => {
    state.status = "loading";
  },
  AUTH_SUCCESS: (state, resp) => {
    state.status = "success";
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  AUTH_ERROR: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  AUTH_LOGOUT: state => {
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};