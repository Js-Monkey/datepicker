<template>
  <div class="install-card">
    <div class="install-card-icon"> <b-icon :font-size="24" :name="icon"></b-icon></div>
    <div class="install-card-code" @click="copyText">{{text}}</div>
  </div>
</template>

<script lang="ts">
import {copyText} from "../../../utils"
export default {
  name: "install-card",
  props: {
    text: {
      type: String
    },
    icon:{
      type: String,
      default: 'yarn'
    }
  },
 setup(){
    return {
      copyText
    }
 }
}
</script>

<style scoped lang="scss">
.install-card {
  margin-left: 10px;
  margin-right: 10px;
  &-icon{
    vertical-align: middle;
    padding: 6px 12px;
    background: #ffb311;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &-code{
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color .31s ease;
    &::after {
      position: absolute;
      display: block;
      content: '';
      width: calc(100% - 30px);
      height: 2px;
      background-color: white;
      transition: all .2s;
      opacity: 0;
    }

    &:hover {
      &::after {
        transform: translateY(2px);
        opacity: 1;
      }
    }
  }
  background: #ffb311a6;
  display: inline-flex;
  border-radius: 5px;
}
</style>
