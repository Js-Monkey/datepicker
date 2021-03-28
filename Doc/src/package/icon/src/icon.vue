<template>
  <svg class="b-icon" :style="{'font-size':fontSize + 'px',fill}">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs} from 'vue'
import {isNumber} from "../../../../../src/utils/typeOf"

export default defineComponent({
  name: 'b-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 20
    },
    fill: {
      type: String,
      default: '#ffffff'
    }
  },
  setup(props) {
    let {fontSize} = toRefs(props)
    return {
      fontSize
    }
  }
})
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.b-icon {
  width: 1em;
  height: 1em;

  &.loading {
    animation: spin 1s infinite linear;
  }
}
</style>
