//import apiCall from "../../api/client";
import Vue from "vue";
import axios from 'axios';

const state = { status: "", profile: {} };

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
};

const actions = {
  USER_REQUEST: ({ commit, dispatch }) => {
    commit('USER_REQUEST');
    const token = localStorage.getItem("api-token");
    axios.get("http://localhost:3000/me", {headers: {'API-Token': token}})
      .then(resp => {
        commit('USER_SUCCESS', resp);
      })
      .catch(() => {
        commit('USER_ERROR');
        // if resp is unauthorized, logout, to
        dispatch('AUTH_LOGOUT');
      });
  }
};

const mutations = {
  USER_REQUEST: state => {
    state.status = "loading";
  },
  USER_SUCCESS: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
  },
  USER_ERROR: state => {
    state.status = "error";
  },
  AUTH_LOGOUT: state => {
    state.profile = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};