import axios from 'axios'
import store from '@/store/store'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

function doAuthenticated() {
  var state = store.state
  if (state && state.api && store.getters.getToken) {
    http.defaults.headers['X-AUTH-TOKEN'] = store.getters.getToken
    http.defaults.headers['Content-type'] = 'application/json'
  } else {
    delete http.defaults.headers['X-AUTH-TOKEN']
  }
  return http
}

export default {
  get(url, request) {
    return doAuthenticated().get(url, request)
  },

  post(url, request) {
    return doAuthenticated().post(url, request)
  },

  patch(url, request) {
    return doAuthenticated().patch(url, request)
  },

  delete(url, request) {
    return doAuthenticated().delete(url, request)
  }
}
