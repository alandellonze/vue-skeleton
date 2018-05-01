<template>
<div>
  <div class="header-container">
    <div class="header-data">
      <div class="header-profile-name" v-if="isLoggedIn"><span>{{username}}</span></div>
      <div class="header-profile-picture" v-if="isLoggedIn"><img src="@/assets/images/logo.png" /></div>
    </div>
  </div>
</div>
</template>


<script>
import store from '@/store/store'

export default {
  computed: {
    isLoggedIn () {
      return store.getters.isLoggedIn
    },

    username () {
      return store.getters.getProfile.username
    }
  }
}
</script>


<style scoped>
.header-container {
  height: 50px;
  margin: 10px;
}

.header-data {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.header-profile-name {
  display: flex;
  margin: 0px 10px 0px 10px;
}

.header-profile-name span {
  margin: auto;
}

.header-profile-picture {
  display: flex;
  margin: 0px 10px 0px 10px;
}

.header-profile-picture img {
  max-width: 35px;
  border-radius: 50%;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.15);
  margin: auto;
}
</style>
