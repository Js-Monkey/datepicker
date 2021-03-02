<template>
  <transition name="fall">
    <div v-if="show" class="b-message">
      {{ message }}
      <Icon name="auto-correct"></Icon>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Icon from '../../icon'

export default defineComponent({
  name: 'b-message',
  components: {Icon},
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  setup() {
    const show = ref(false)

    function toggleVisibility() {
      show.value = !show.value
    }

    return {
      show,
      toggleVisibility
    }
  }
})
</script>

<style scoped lang="scss">
@import "./Doc/src/assets/style/color";

.b-message {
  position: fixed;
  top: 1px;
  left: 50%;
  font-size: 13px;
  transform: translateX(-50%);
  background: #264b61;
  padding: 8px 60px;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
  display: flex;
  align-items: center;
  svg{
    margin-left: 8px;
  }
}

.fall-enter-active,
.fall-leave-active {
  transition: .2s all ease;
  transform: translate(-50%, 0);
}

.fall-enter-from,
.fall-leave-to {
  transition: .35s all;
  transform: translate(-50%, -100%);
}
</style>
