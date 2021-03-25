<template>
  <div class="theme-card">
    <b-icon fill="#4edee5" @click="reset" name="zhongzhi"></b-icon>
    <b-icon fill="#FF4D4F" @click="downloadCss" name="download"></b-icon>
    <div class="theme-color-picker">
      <datepicker-demo :cssLists="cssLists"></datepicker-demo>
      <div  class="theme-ul">
        <li v-for="(list,idx) in cssLists">
          <div class="color-card" @click="selectColor(idx)" :style="{background: list.value}">
            <div class="cloak">
              {{ list.label }}
            </div>
          </div>
          <el-color-picker style="visibility: hidden;position: relative;width: 0;height: 0"
                           v-model="list.value"></el-color-picker>
        </li>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: 'theme-card',
  setup() {
    const cssLists = reactive([
      {
        value: '#2ECC71',
        originVal: '#2ECC71',
        label: 'theme'
      },
      {
        value: '#eafaf1',
        originVal: '#eafaf1',
        label: 'range'
      },
      {
        value: '#858585',
        originVal: '#858585',
        label: 'header'
      },
      {
        value: '#969595',
        originVal: '#969595',
        label: 'th'
      },
      {
        value: '#5f5f5f',
        originVal: '#5f5f5f',
        label: 'tbody'
      },
    ])

    function reset() {
      cssLists.forEach(item => item.value = item.originVal)
    }

    function transform(source: any) {
      return cssLists.reduce((str, item) => {
        return str.replaceAll(item.originVal, item.value)
      }, source)
    }

    function download(res: any) {
      const source = transform(res.default)
      const blob = new Blob([source], {type: 'text/css'})
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.setAttribute('download', 'datepicker.css')
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    function downloadCss() {
      import('../../../../../src/assets/date-picker.scss').then(res => {
        download(res)
      })

    }

    return {
      reset,
      cssLists,
      downloadCss
    }
  },
  methods: {
    selectColor(idx: number) {
      (document.querySelectorAll('.el-color-picker__trigger')[idx] as HTMLElement).click()
    }
  }
})
</script>

<style lang="scss">
$width: 60px;
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

  svg {
    margin-left: 20px;
    cursor: pointer;
  }

  .theme-color-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .theme-ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin-left: 40px;
      width: 120px;
      li {
        text-align: center;
        height: $width;
        margin-bottom: 15px;
        .color-card {
          width: $width;
          height: $width;
          line-height: $width;
          border-radius: 8px;
          margin: 10px 10px 15px;
          text-align: center;
          color: #112232;
          cursor: pointer;
          font-size: 12px;
          position: relative;

          .cloak {
            width: $width;
            height: 20px;
            line-height: 20px;
            background: #ffffff;
            position: absolute;
            left: 0;
            bottom: 0;
            opacity: .3;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        }

      }
    }
  }
}
</style>
