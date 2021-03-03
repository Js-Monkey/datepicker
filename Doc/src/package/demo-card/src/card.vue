<template>
  <slot></slot>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs} from 'vue'
import Better from '../../../../../src'

export default defineComponent({
  name: 'demo-card',
  props: {
    el: {
      type: HTMLInputElement,
      default: ()=> document.createElement('input')
    },
    options: {
      type: Object
    }
  },
  setup(props) {
    const {el} = toRefs(props)
    Better(el.value)
  }
})
</script>

<style scoped lang="scss">

</style>
