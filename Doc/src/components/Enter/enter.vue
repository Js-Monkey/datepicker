<template>
  <div class="enter">
    <Logo></Logo>
  </div>
</template>

<script>
import Logo from './logo.vue'
export default {
name: "Enter",
  components:{Logo}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/global";
  .enter{
    background: $bg-2;
    display: flex;
    justify-content: center;
  }
</style>
