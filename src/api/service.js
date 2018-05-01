import api from '@/api/api'

export default {
  login(request) {
    return api.post('/api/client-login.php?email=' + request.email + '&password=' + request.password + '&requestToken=1')
  },

  upcomingOrders(request) {
    return api.post('/api/upcoming_orders_get_all', request)
  }
}
