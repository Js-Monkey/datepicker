<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'b-button-group',
  setup() {

  }
})
</script>

<style lang="scss" scoped>
.b-button-group {
  display: inline-block;
 button{
   &:first-child{
     border-top-right-radius: 0;
     border-bottom-right-radius: 0;
   }
   &:last-child{
     border-top-left-radius: 0;
     border-bottom-left-radius: 0;
   }
 }
}
</style>


