<template>
  <div class="install-card">
    <div class="install-card-icon"> <b-icon :font-size="24" :name="icon"></b-icon></div>
    <div class="install-card-code">{{text}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "install-card",
  props: {
    text: {
      type: String
    },
    icon:{
      type: String,
      default: 'yarn'
    }
  }
}
</script>

<style scoped lang="scss">
.install-card {
  margin-left: 10px;
  margin-right: 10px;
  &-icon{
    vertical-align: middle;
    padding: 6px 12px;
    background: #e67e22;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &-code{
    padding: 10px 15px;
  }
  background: #e67e22b5;
  display: inline-flex;
  border-radius: 5px;
}
</style>
