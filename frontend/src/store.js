import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
  token: null,
  username: null,
  isLogged: false,
};

const mutations = {
  saveUsername(state, data) {
    state.token = data.access_token;
    state.username = data.username;
    state.isLogged = true;
  }
};

const actions = {
  registerAction: ({}, userData) => {
    axios.post('http://localhost:5000/registration', userData)
      .then( res => {
        console.log(res);
      })
      .catch( error => console.log(error) );
  },
  loginAction: ({ commit }, userData) => {
    axios.post('http://localhost:5000/login', userData)
      .then( res => {
        console.log(res);
        console.log(res.data.access_token);
        console.log(res.data.username);
        commit('saveUsername', res.data)
      })
      .catch( error => console.log(error));
  },
};

const getters = {

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
