<template>
  <div class="enter">
    <Logo></Logo>
  </div>
</template>

<script lang="ts">
import Logo from './logo.vue'
export default {
name: "Enter",
  components:{Logo}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/global";
  .enter{
    min-height: calc(100vh - 66px);
    background: $bg-2;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
