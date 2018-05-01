import api from '@/api/api'

export default {
  login(request) {
    return api.get('/api/auth', request)
  },

  getCats(request) {
    return api.get('/api/cats', request)
  }
}
