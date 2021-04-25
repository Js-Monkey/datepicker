<template>
  <div class="install">
    <install-card icon="npm" text="npm i better-datepicker"></install-card>
    <install-card icon="yarn" text="yarn add better-datepicker"></install-card>
  </div>
  <div class="fixedHeight"></div>
</template>

<script>
import installCard from './install-card.vue'
import {defineComponent} from "vue"

export default defineComponent({
  name: "install-card-group",
  components: {
    installCard
  },
})
</script>

<style scoped lang="scss">
.install {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #264b61;
  text-align: center;
  color: #f9fdfe;
  padding: 9px;
  font-family: Menlo;
  position: absolute;
  left: 0;
}
.fixedHeight{
  height: 60px;
}
</style>
