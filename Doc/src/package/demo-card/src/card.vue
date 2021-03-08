<template>
  <div class="demo-card">
    <slot></slot>
    <div v-show="justCode">
      <slot name="code"></slot>
    </div>
    <div v-show="!justCode" class="demo-card-codeBox-wrapper">
      <b-button v-for="(item,index) in buttonGroup" :class="{active:index ===activeIndex}" @click="openActive(index)">{{
          item
        }}
      </b-button>
      <div class="demo-card-codeBox">
        <div ref="code" v-show="activeIndex===0">
          <slot name="JS"></slot>
        </div>
        <div v-show="activeIndex===1">
          <slot name="HTML"></slot>
        </div>
        <div v-show="activeIndex===2">
          <slot name="Result"></slot>
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
      justCode: true,
      buttonGroup: [
        'JS',
        'HTML',
        'Result'
      ]
    }
  },
  setup(props) {
    let {fontSize} = toRefs(props)
    const activeIndex = ref(0)
    const openActive = (idx: number) => activeIndex.value = idx
    return {
      fontSize,
      activeIndex,
      openActive,
    }
  },
  mounted() {
    this.justCode = !this.$slots.Result()[0].children
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
    color: #D9ACA7;

    h2 {
      color: #ffb311;
    }

    &-description {
      width: 50vw;
    }

    &-component {
      text-align: center;
    }

    &-codeBox {
      width: 50vw;
      height: 300px;
      border: 1px solid #3498DB;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;

      &-wrapper {
        button {
          color: #3498DB !important;
          border-color: #3498DB !important;
          border-bottom: none !important;

          &:first-child {
            border-right: none;
            border-radius: 5px 0 0 0 !important;
          }

          &:nth-child(2) {
            border-right: none;
            border-radius: 0 !important;
          }

          &:nth-child(3) {
            border-radius: 0 5px 0 0 !important;
          }

          &.active {
            background: #3498DB !important;
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
