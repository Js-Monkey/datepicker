<template>
  <div class="demo-card">
    <slot></slot>
    <div v-show="justCode">
      <slot name="code"></slot>
    </div>
    <div v-show="!justCode" class="demo-card-codeBox-wrapper">
      <b-button :class="{active: !isDemo}" @click="closeDemo">JS</b-button>
      <b-button :class="{active: isDemo}" @click="openDemo">Result</b-button>
      <div class="demo-card-codeBox">
        <div v-show="isDemo">
          <slot name="demo"></slot>
        </div>
        <div ref="code" v-show="!isDemo">
          <slot name="code"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs, ref} from 'vue'

export default defineComponent({
  name: 'demo-card',
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
  data() {
    return {
      justCode: true
    }
  },
  setup(props) {
    let {fontSize} = toRefs(props)
    const isDemo = ref(false)
    const openDemo = () => isDemo.value = true
    const closeDemo = () => isDemo.value = false
    return {
      fontSize,
      isDemo,
      openDemo,
      closeDemo
    }
  },
  mounted() {
    this.justCode = !this.$slots.demo()[0].children
  }
})
</script>

<style lang="scss">
@import "./Doc/src/assets/style/color";

.demo {
  margin-top: 80px;
  width: 100vw;
  font-family: Futura;

  strong {
    color: #c0392b;
  }

  &-title {
    h1 {
      color: rgb(244, 224, 233);
      text-align: center;
      letter-spacing: 1px;
      color: rgb(244, 224, 233);
    }
  }

  &-card {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffb311;

    &-description {
      width: 50vw;
    }

    &-component {
      text-align: center;
    }

    &-codeBox {
      width: 50vw;
      height: 300px;
      border: 1px solid #c0392b;
      overflow-y: auto;
      overflow-x: hidden;
      &-wrapper {
        button {
          color: #c0392b !important;
          border-color: #c0392b !important;
          &:first-child{
            border-right: none;
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
          }
          &:nth-child(2){
            border-left-color: white !important;
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
          &.active{
            background: #c0392b !important;
            color: #ffffff !important;
          }
        }
        width: 50vw;
        position: relative;
      }
    }
  }

  pre {
    margin: 0;
    code {
      width: calc(100% - 5px);
      border-radius: 7px;
      height: inherit;
      padding: 10px;
      font-size: 16px;
      min-height: 400px;
    }
  }

  .highlight {
    width: 50vw;
    display: inline-block;
  }
}

</style>
