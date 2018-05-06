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
  overflow: hidden;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
  background-color: #F2F2F2;
  color: #333333;
}

.app-left {
  width: 250px;
}

.app-container {
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  height: 100vh;
}

.app-header {
  width: 100%;
  height: 70px;
}

.app-center {
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: auto;
}
</style>
