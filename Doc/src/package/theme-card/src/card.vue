<template>

</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs, ref} from 'vue'

export default defineComponent({
  name: 'theme-card',
  data() {
    return {
    }
  }
})
</script>

<style lang="scss">
@import "./Doc/src/assets/style/color";

.demo {
  width: 100%;
  margin-top: 20px;
  display: flex;
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
  .row{
    max-width: 50%;
    min-width: 50%;
    padding-left: 14px;
    padding-right: 14px;
  }

  &-card {
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccf5e5;
    border: 1px dashed #2f3460;
    border-radius: 8px;
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
