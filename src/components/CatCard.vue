<template>
<div>
  <div class="cat-content">
    <div>{{cat.id}}</div>
    <div>{{cat.name}}</div>
  </div>
</div>
</template>


<script>
export default {
  props: ['cat']
}
</script>


<style scoped>
.cat-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
}

.cat-content div {
  padding: 5px;
}
</style>
