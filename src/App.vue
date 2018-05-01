<template>
<div id="app">
  <div class="app-left">
    <panel-left />
  </div>
  <div class="app-container">
    <div class="app-header">
      <panel-header />
    </div>
    <div class="app-center">
      <router-view />
    </div>
  </div>
</div>
</template>


<script>
import PanelHeader from '@/components/PanelHeader.vue'
import PanelLeft from '@/components/PanelLeft.vue'

export default {
  name: 'app',
  components: {
    PanelHeader,
    PanelLeft
  }
}
</script>


<style>
body {
  margin: 0px;
}

#app {
  color: #333333;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.app-left {
  width: 250px;
  display: flex;
  flex-direction: column;
}

.app-container {
  width: calc(100% - 250px);
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
}

.app-header {
  width: 100%;
}

.app-center {
  width: 100%;
}
</style>
