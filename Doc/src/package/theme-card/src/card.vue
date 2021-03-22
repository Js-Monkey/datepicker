<template>
  <div class="theme-ul">
    <li v-for="list in cssLists">
      <div class="color-card" :style="{background: list.value}">
        {{ list.label }}
        <div class="cloak">
          {{ list.value }}
        </div>
      </div>
      <el-color-picker v-model="list.value"></el-color-picker>
    </li>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'theme-card',
  data() {
    return {
      cssLists: [
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
  }
})
</script>

<style lang="scss">
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
      margin-bottom: 15px;
      margin-left: 10px;
      margin-right: 10px;
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
</style>
