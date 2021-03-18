<template>
  <div class="demo-card">
    <div class="demo-card-codeBox-wrapper">
      <slot></slot>
      <div class="demo-card-codeBox-button">
        <span :class="{active:index ===activeIndex}" @click="openActive(index)"
              v-for="(item,index) in buttonGroup">{{ item }}</span>
      </div>
      <div :class="{fixedHeight: buttonGroup.length>1}" class="demo-card-codeBox">
        <div  ref="code" v-show="activeIndex===0">
          <slot name="JS"></slot>
        </div>
        <div v-show="activeIndex===1">
          <slot name="HTML"></slot>
        </div>
        <div v-show="activeIndex===2" class="demo-card-result">
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
    if (!this.$slots.Result()[0].children) {
      this.buttonGroup = []
    }

  }
})
</script>

<style lang="scss">
@import "./Doc/src/assets/style/color";

.demo {
  width: 100%;
  margin-top: 20px;
  font-family: Futura;

  &:last-child {
    margin-bottom: 90px;
  }

  strong {
    color: #e84c3b;
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
    justify-content: center;
    align-items: center;
    color: #ccf5e5;

    h2 {
      color: #ffb311;
    }

    &-result {
      overflow: auto;
      height: 300px;
      border: 1px dashed;
      border-radius: 6px;
      background: #131b2e;
      display: flex;
      justify-content: center;
      padding: 30px;
    }

    &-description {
      p {
        line-height: 1.75;
      }
    }

    .fixedHeight {
      height: 300px;
      pre{
        min-height: 300px;
      }
    }

    &-codeBox {;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;

      &-button {
        text-align: end;

        span {
          cursor: pointer;
          margin-left: 10px;
          color: #ffffff;
          &.active {
            color: #c62524;
          }
        }
      }

      &-wrapper {
        width: 100%;
        position: relative;
      }
    }
    &:last-child{
      padding-bottom: 90px;
    }
  }

  .highlight {
    width: 100%;
    display: inline-block;
  }
}

</style>
