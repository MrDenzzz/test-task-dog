import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
axios.defaults.baseURL = 'https://dog.ceo/api'

const state = {
  loader: false,
  breeds: [],
  images: [],
  favourites: []
}

const mutations = {
  START_LOADER: (state) => {
    state.loader = true
  },

  SET_BREEDS: (state, payload) => {
    state.breeds = payload.message
  },

  SET_IMAGES: (state, payload) => {
    state.images = [...state.images, ...payload.message]
    state.loader = false
  },

  RESET_IMAGES: (state) => {
    state.images = []
  },

  GET_FAVOURITES: (state) => {
    try {
      state.favourites = JSON.parse(localStorage.getItem('favourites')) || []
    } catch (e) {
      localStorage.removeItem('favourites')
    }
  },

  ADD_TO_FAVOURITES: (state, image) => {
    state.favourites.push(image)
    localStorage.setItem('favourites', JSON.stringify(state.favourites))
  },

  DELETE_FROM_FAVOURITES: (state, index) => {
    state.favourites.splice(index, 1)
    localStorage.setItem('favourites', JSON.stringify(state.favourites))
  }
}

const actions = {
  getBreeds: async (context) => {
    let {data} = await axios.get('/breeds/list/all')
    context.commit('SET_BREEDS', data)
  },

  getRandomImages: async (context) => {
    context.commit('START_LOADER')
    let {data} = await axios.get('/breeds/image/random/20')
    context.commit('SET_IMAGES', data)
  },

  getBreedImages: async (context, payload) => {
    context.commit('START_LOADER')
      let {data} = await axios.get(`/breed/${payload.breed}/images/random/20`)
      context.commit('SET_IMAGES', data)
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
