<template>
<div>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="dashboard-title"><span>Dashboard</span></div>
    </div>

    <div class="dashboard-content">
      Content...
    </div>
  </div>
</div>
</template>


<script>
</script>


<style scoped>
.dashboard-container {
  margin: 20px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.dashboard-header {
  width: 100%;
  height: 50px;
  background: #333333;
  border-radius: 4px 4px 0px 0px;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
}

.dashboard-title {
  display: flex;
  margin-left: 20px;
}

.dashboard-title span {
  margin: auto;
}

.dashboard-content {
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 20px;
}
</style>
