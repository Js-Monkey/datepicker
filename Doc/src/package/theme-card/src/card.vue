<template>
  <div class="theme-card">
    <b-icon fill="#4edee5" @click="reset" name="zhongzhi"></b-icon>
    <b-icon fill="#FF4D4F" @click="downloadCss" name="download"></b-icon>
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
          originVal: '#2ECC71',
          label: '$theme-color'
        },
        {
          value: '#eafaf1',
          originVal: '#eafaf1',
          label: '$light-theme-color'
        },
        {
          value: '#737373',
          originVal: '#737373',
          label: '$shadow-color'
        },
        {
          value: '#858585',
          originVal: '#858585',
          label: '$text-color'
        },
        {
          value: '#dde0e7',
          originVal: '#dde0e7',
          label: '$border-color'
        },
      ]
    }
    let reactiveList = reactive(cssLists())
    function reset() {
      reactiveList.forEach(item=>item.value = item.originVal)
    }
    function transform(source){
      return reactiveList.reduce((str, item)=>{
        return str.replaceAll(item.originVal,item.value)
      },source)
    }
    function download(res){
      const source = transform(res.default)
      const  blob = new Blob([ source], {type: 'text/css'})
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.setAttribute('download', 'datepicker.css')
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    function downloadCss(){
      import('../../../../../src/assets/date-picker.scss').then(res=>{
        download(res)
      })

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
  text-align: right;
  margin-top: 80px;
  svg{
    margin-left: 20px;
    cursor: pointer;
  }
  .theme-ul {
    margin-top: 20px;
    list-style: none;
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
