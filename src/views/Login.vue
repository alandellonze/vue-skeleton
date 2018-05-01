<template>
<div>
  <form class="login-container">
    <input type="text" class="login-input" placeholder="Email" v-model="email" />
    <input type="password" class="login-input" placeholder="Password" v-model="password" />
    <button type="submit" class="login-button" v-on:click.prevent="login">Login</button>
  </form>
</div>
</template>


<script>
import store from '@/store/store'
import router from '@/router'
import service from '@/api/service'

export default {
  data() {
    return {
      email: 'username@mail.com',
      password: 'password'
    }
  },

  methods: {
    login() {
      service.login({
        email: this.email,
        password: this.password
      }).then(response => {
        this.loginCheck(response)
      }, error => {
        this.loginFailure(error) })
    },

    loginCheck(response) {
      let status = response.data.status
      console.log('status: ' + status)
      if (status === 'ok') {
        let token = response.data.data
        console.log('token: ' + token)
        let profile = {
          username: this.email
        }
        this.loginSuccess(token, profile)
      } else if (status === 'error') {
        this.loginFailure(response.data.errors)
      }
    },

    loginSuccess(token, profile) {
      console.log('access granted: ', token, profile)

      store.dispatch('login', {
        token: token,
        profile: profile
      }).then(() => {
        router.push('/')
      })
    },

    loginFailure(error) {
      console.err('cannot execute login: ', error)
      store.dispatch('logout')
    }
  }
}
</script>


<style scoped>
.login-container {
  margin: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.login-input {
  padding: 8px;
  width: 50%;
  margin-bottom: 20px;
}

.login-button {
  background-color: #333333;
  color: white;
  font-size: 16px;
  width: 50%;
  padding: 8px;
  border: none;
  cursor: pointer
}

.login-button:hover {
  opacity: 0.9;
}
</style>
