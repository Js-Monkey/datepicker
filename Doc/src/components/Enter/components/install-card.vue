<template>
  <div class="install-card">
    <div class="install-card-icon"> <b-icon :font-size="24" :name="icon"></b-icon></div>
    <div class="install-card-code" @click="copy">{{text}}</div>
  </div>
</template>

<script lang="ts">
import {_Event} from "../../../../../src/types/event"

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
  methods: {
    copy(e: _Event) {
      const transfer = document.createElement('input')
      document.body.appendChild(transfer)
      transfer.value = e.target.innerText
      transfer.select()
      if (document.execCommand) {
        document.execCommand('copy')
        console.log('复制成功')
        this.$message('Copy succeeded')
      }
      document.body.removeChild(transfer)
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
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color .31s ease;
    &:hover{
      background: #ffb311;
    }
  }
  background: #ffb311a6;
  display: inline-flex;
  border-radius: 5px;
}
</style>
