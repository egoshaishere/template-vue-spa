import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await response.json();
}

const getOtherData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
}

const exchangeModule = {
  namespaced: true,
  state: {
    responseJSON: '',
    rates: '',
    test: 'Testando azazahizxfgiyagk'
  },
  mutations: {
    gotData(state, payload) {
      console.log('mutation - gotData')
      console.log("payload", payload)
      state.responseJSON = payload
      state.rates = payload.rates
    },
  },
  actions: {},
  async getRates({ commit }) {
    commit('gotData', await getData())
  },
  getters: {}
}

export default new Vuex.Store({
  state: {
    test: 'global sore var'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    exchange: exchangeModule
  }
})
