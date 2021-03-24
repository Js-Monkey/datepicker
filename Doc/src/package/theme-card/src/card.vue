<template>
  <div class="theme-card">
    <b-button-group class="button-group">
      <b-button size="mini" @click="reset"> reset</b-button>
      <b-button size="mini" @click="downloadCss" type="warn">download</b-button>
    </b-button-group>
    <div class="theme-ul">
      <li v-for="list in reactiveList">
        {{ list.label }}
        <div class="color-card" @click="copyText" :style="{background: list.value}">
          <div class="cloak">
            {{ list.value }}
          </div>
        </div>
        <el-color-picker v-model="list.value"></el-color-picker>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, reactive} from 'vue'
import {copyText} from "../../../utils"
export default defineComponent({
  name: 'theme-card',
  setup() {
    function cssLists(){
      return [
        {
          value: '#2ECC71',
          label: '$theme-color'
        },
        {
          value: '#eafaf1',
          label: '$light-theme-color'
        },
        {
          value: '#737373',
          label: '$shadow-color'
        },
        {
          value: '#858585',
          label: '$text-color'
        },
        {
          value: '#dde0e7',
          label: '$border-color'
        },
      ]
    }
    let reactiveList = reactive(cssLists())

    function reset() {
      reactiveList.splice(0,reactiveList.length,...cssLists())
    }
    function downloadCss(){
     console.log(download)
    }

    return {
      copyText,
      reset,
      reactiveList,
      downloadCss
    }
  }
})
</script>

<style lang="scss">
.button-group {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
}

.theme-card {
  position: relative;

  .theme-ul {
    list-style: none;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &:after {
      content: "";
      flex: auto;
    }

    li {
      text-align: center;

      .color-card {
        width: 150px;
        height: 150px;
        line-height: 130px;
        border-radius: 8px;
        position: relative;
        margin: 10px 10px 15px;
        text-align: center;
        color: #112232;
        cursor: pointer;

        .cloak {
          width: 150px;
          height: 50px;
          line-height: 50px;
          background: #ffffff;
          position: absolute;
          left: 0;
          bottom: 0;
          opacity: .3;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }

      margin-bottom: 20px;
    }
  }
}
</style>
