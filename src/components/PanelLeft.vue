<template>
<div>
  <div class="left-container">
    <img class="left-logo" src="@/assets/images/logo.png" />

    <h3>Menu</h3>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/cats">Cats</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><a v-on:click.prevent="logout">Logout</a></li>
    </ul>
  </div>
</div>
</template>


<script>
import store from '@/store/store'
import router from '@/router'

export default {
  methods: {
    logout() {
      console.log('Logging out')

      store.dispatch('logout').then(() => {
        router.push('/login')
      })
    }
  }
}
</script>


<style scoped>
.left-container {
  width: 100%;
  margin: 20px;
}

.left-container h3 {
  font-size: 16px;
}

.left-container li {
  margin-bottom: 10px;
}

.left-container a {
  color: #333333;
  text-decoration: none;
  cursor: pointer;
}

.left-logo {
  max-width: 100px;
  margin-left: 50px;
  margin-bottom: 25px;
}
</style>
