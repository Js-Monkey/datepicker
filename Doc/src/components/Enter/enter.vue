<template>
  <div class="enter">
    <Logo></Logo>
    <div class="install">
      <install-card icon="npm" text="npm i better-datepicker"></install-card>
      <install-card icon="yarn" text="yarn add better-datepicker"></install-card>
    </div>
    <div class="start">
      <start></start>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from './components/logo.vue'
import installCard from './components/install-card.vue'
import start from './Demo/start/index.md'
export default {
  name: "Enter",
  components: {
    Logo,
    start,
    installCard
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/global";

.enter {
  min-height: calc(100vh - 66px);
  background: #112232;
  display: flex;
  align-items: center;
  flex-direction: column;
  .install{
    width: 100%;
    height: 60px;
    margin-top: 80px;
    background: #264b61;
    text-align: center;
    color: #f9fdfe;
    padding: 9px;
    font-family: Menlo;
  }
  .start{
    background: #112232;
  }

}
</style>
