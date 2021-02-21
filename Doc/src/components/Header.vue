<template>
  <div class="header">
    <b-icon name="better1"></b-icon>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped lang="scss">
@import "./Doc/src/assets/style/color";

$header-bg: $black;
.header {
  height: 66px;
  background: $header-bg;
}
</style>
