import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const getDefaultState = () => {
  return {
    profile: {},
    api: {
      token: null,
      error: null
    }
  }
}

const persistedState = createPersistedState({
  getState(key, storage, value) {
    try {
      value = storage.getItem(key)
      return value && typeof value !== 'undefined' ? JSON.parse(value) : undefined
    } catch (e) {
      console.error('Error rehydrating state', e)
    }
    return undefined
  }
})

export default new Vuex.Store({
  strict: true,

  state: getDefaultState(),

  mutations: {
    setToken: (state, token) => {
      state.api.token = token
    },
    setProfile: (state, profile) => {
      state.profile = profile
    },
    resetState: state => {
      Object.assign(state, getDefaultState())
    },
  },

  actions: {
    login: (context, data) => {
      context.commit('setToken', data.token)
      context.commit('setProfile', data.profile)
    },
    logout: (context) => {
      context.commit('resetState')
    }
  },

  getters: {
    getToken: state => {
      return state.api.token
    },
    getProfile: state => {
      return state.profile
    },
    isLoggedIn: state => {
      return state.profile && state.profile.username != null
    }
  },

  plugins: [persistedState]
})
