import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
axios.defaults.baseURL = 'https://dog.ceo/api'

const state = {
  breeds: [],
}
const mutations = {
  SET_BREEDS: (state, payload) => {
    state.breeds = payload.message
  },
}
const actions = {
  getBreeds: async (context) => {
    let {data} = await axios.get('/breeds/list/all')
    context.commit('SET_BREEDS', data)
  },
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
