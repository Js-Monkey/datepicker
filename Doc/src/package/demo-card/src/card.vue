<template>
  <div class="demo-card">
    <div v-show="buttonGroup.length===2" class="demo-card-result">
      <slot name="Result"></slot>
    </div>
    <div class="demo-card-codeBox-wrapper">
      <slot></slot>
      <div class="demo-card-codeBox-button">
        <span :class="{active:index ===activeIndex}" @click="openActive(index)" v-for="(item,index) in buttonGroup">{{ item }}</span>
      </div>
      <div v-show="buttonGroup.length===0">
        <slot name="JS"></slot>
      </div>
      <div v-show="buttonGroup.length===2" class="demo-card-codeBox">
        <div ref="code" v-show="activeIndex===0">
          <slot name="JS"></slot>
        </div>
        <div v-show="activeIndex===1">
          <slot name="HTML"></slot>
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
        'HTML'
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
  margin-top: 80px;
  width: 100vw;
  font-family: Futura;
  &:last-child{
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
    color: #f5e7cc;
    line-height: 1.7;
    h2 {
      color: #ffb311;
    }

    &-result{
      width: 30vw;
      overflow: auto;
      height: 430px;
      border:1px dashed;
      border-radius: 6px;
      margin-right: 30px;
      background: #131b2e;
      display: flex;
      justify-content: center;
      padding: 30px;
    }
    &-description{
      p{
        line-height: 1.75;
      }
    }

    &-codeBox {
      width: 50vw;
      height: 300px;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;

      &-button {
        text-align: end;

        span {
          cursor: pointer;
          margin-left: 10px;
          &.active{
            color: #c62524;
          }
        }
      }

      &-wrapper {

        width: 50vw;
        position: relative;
      }
    }
  }

  pre {
    margin: 0;
    padding: 0;

    code {
      width: 100%;
      border-radius: 7px;
      padding: 10px;
      font-size: 16px;
      min-height: 100px;
    }
  }

  .highlight {
    width: 50vw;
    display: inline-block;
  }
}

</style>
