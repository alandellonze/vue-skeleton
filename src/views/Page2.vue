<template>
<div>
  <div class="page2-container">
    <div class="page2-header">
      <div class="page2-title"><span>Page 2</span></div>
    </div>

    <div class="page2-content">
      Content...
    </div>
  </div>
</div>
</template>


<script>
import service from '@/api/service'

export default {
  components: {
  },

  data () {
    return {
    }
  },

  methods: {
    getUpcomingOrders() {
      service.upcomingOrders().then(response => {
          // do something
      }, error => {
          // do something
      });
    }
  },

  mounted(){
    this.getUpcomingOrders()
  }
}
</script>


<style scoped>
.page2-container {
  margin: 20px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.page2-header {
  width: 100%;
  height: 50px;
  background: #333333;
  border-radius: 4px 4px 0px 0px;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
}

.page2-title {
  display: flex;
  margin-left: 20px;
}

.page2-title span {
  margin: auto;
}

.page2-content {
  height: calc(100vh - 160px);
  overflow-y: auto;
  padding: 20px;
}
</style>
