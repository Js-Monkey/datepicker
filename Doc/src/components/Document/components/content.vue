<template>
  <div class="components-content-wrapper">
    <div class="components-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style lang="scss">

.components-content {
  width: 70%;
  background: #112232;
  padding: 20px 20px 20px 100px;
  color: #dae3f6;
  font-family: Futura;
  &-wrapper{
    width: 100%;
    background: #112232;
    display: flex;
    justify-content: center;
    height: calc(100vh - 66px);
    overflow-y: auto;
  }
}
</style>
