<template>
<div>
  <div class="cats-container">
    <div class="cats-header">
      <div class="cats-title"><span>Cats</span></div>
    </div>

    <div class="cats-content">
      <div v-for="cat in cats">{{cat.name}}</div>
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
      cats: []
    }
  },

  methods: {
    getCats() {
      service.getCats().then(response => {
        this.cats = response.data
      }, error => {
        console.err(error)
      })
    }
  },

  mounted(){
    this.getCats()
  }
}
</script>


<style scoped>
.cats-container {
  margin: 20px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.cats-header {
  width: 100%;
  height: 50px;
  background: #333333;
  border-radius: 4px 4px 0px 0px;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
}

.cats-title {
  display: flex;
  margin-left: 20px;
}

.cats-title span {
  margin: auto;
}

.cats-content {
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 20px;
}
</style>
