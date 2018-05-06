<template>
<div>
  <div class="login-container">
    <form class="login-form">
      <input type="text" class="login-input" placeholder="Email" v-model="email" />
      <input type="password" class="login-input" placeholder="Password" v-model="password" />
      <button type="submit" class="login-button" v-on:click.prevent="login">Login</button>
    </form>
  </div>
</div>
</template>


<script>
import router from '@/router'
import store from '@/store/store'
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
      let status = response.status
      console.log('status: ' + status)
      if (status === 200) {
        let token = response.data.token
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
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  background-color: #F2F2F2;
  color: #333333;
}

.login-form {
  position: relative;
  margin: auto;
  padding: 40px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  height: 25%;
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
