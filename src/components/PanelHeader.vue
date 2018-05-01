<template>
<div>
  <div class="header-container">
    <div class="header-data">
      <div class="header-profile-name"><span>{{username}}</span></div>
      <div class="header-profile-picture" v-if="username"><img src="@/assets/images/logo.png" /></div>
    </div>
  </div>
</div>
</template>


<script>
import store from '@/store/store'

export default {
  name: 'panel-header',

  computed: {
    username () {
      return store.getters.getProfile.username
    }
  }
}
</script>


<style scoped>
.header-container {
  height: 50px;
  margin: 20px 20px 0px 20px;
}

.header-data {
  width: 100%;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
}

.header-profile-name {
  font-size: 14px;
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
  border-radius: 50%;
  margin: auto;
}
</style>
