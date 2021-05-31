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
  background: #112232;
  padding: 20px 20px 20px 20px;
  color: #dae3f6;
  max-width: calc(100vw - 230px);
  font-family: Futura;
  width: 80%;

  &-wrapper {
    width: calc(100vw - 210px);
    background: #112232;
    display: flex;
    justify-content: center;
    height: calc(100vh - 66px);
    overflow-y: auto;
  }
}

.markdown-body {
  background: #112232;

  p {
    margin-top: 0;
  }
}
</style>
