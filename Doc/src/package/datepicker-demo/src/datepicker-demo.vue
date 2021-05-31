<template>
  <div class="better-datepicker-wrapper"
       style="display: inline-block; animation: 0.3s ease 0s 1 normal none running show;">
    <div class="better-datepicker-header" :style="{color: header.value}" style=" width:298px;text-align:center">
      <svg viewBox="0 0 1024 1024" style=" position:absolute;left:30px;width:14px;height:14px">
        <path
            d="M176 513.7l392.73-395.44a32 32 0 0 0-45.41-45.1L108 491.3a32 32 0 0 0 0.16 45.25L523.48 949a32 32 0 1 0 45.1-45.41z"></path>
        <path
            d="M525.23 513.7L918 118.26a32 32 0 1 0-45.41-45.1L457.27 491.3a32 32 0 0 0 0.16 45.25L872.7 949a32 32 0 0 0 45.1-45.41z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024"
           style="position: absolute; left: 50px; width: 14px; height: 14px; display: inline-block;">
        <path
            d="M721.9968 979.0208l47.0528-47.104-419.94752-419.98848 419.94752-419.90144-47.05792-47.04768-419.93216 419.89632h-0.00512l-47.104 47.09888 47.04768 47.04256z"></path>
      </svg>
      <span style="display: none;">2020 - 2029</span><span class="better-datepicker-pointerCursor"
                                                           style="display: inline-block;">2021</span><span
        class="better-datepicker-pointerCursor" style="display: inline-block;">May</span>
      <svg viewBox="0 0 1024 1024"
           style=" position:absolute;right:30px;transform:rotate(180deg);width:14px;height:14px">
        <path
            d="M176 513.7l392.73-395.44a32 32 0 0 0-45.41-45.1L108 491.3a32 32 0 0 0 0.16 45.25L523.48 949a32 32 0 1 0 45.1-45.41z"></path>
        <path
            d="M525.23 513.7L918 118.26a32 32 0 1 0-45.41-45.1L457.27 491.3a32 32 0 0 0 0.16 45.25L872.7 949a32 32 0 0 0 45.1-45.41z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024"
           style="position: absolute; right: 50px; transform: rotate(180deg); width: 14px; height: 14px; display: inline-block;">
        <path
            d="M721.9968 979.0208l47.0528-47.104-419.94752-419.98848 419.94752-419.90144-47.05792-47.04768-419.93216 419.89632h-0.00512l-47.104 47.09888 47.04768 47.04256z"></path>
      </svg>
    </div>
    <table class="better-datepicker-date better-datepicker-week"
           style="text-align: center; padding: 5px 20px; width: 320px; display: inline-block;">
      <thead>
      <th :style="{color: th.value}" v-for="name in thName" style="height:40px;width:40px;padding:3px 0">{{ name }}</th>
      </thead>
      <tbody>
      <tr v-for="row in 6">
        <td v-for="col in 7" style="height:40px;width:40px;padding:3px 0"
            :style="{color:  getDay(row,col) === 3 ? theme.value :tbody.value}"
            :class="{'better-datepicker-pre': getDay(row,col) < 5,'better-datepicker-next': getDay(row,col) > 34,next: getDay(row,col)>32, 'better-datepicker-range-start': row ===3 && col ===1, 'better-datepicker-range-end': row ===3 && col ===7, 'better-datepicker-inRange':  row ===3 && (col>1&& col<7)}">
          <div
              :style="{background: row ===3 && (col>1&& col<7)? range.value: ((row ===3 && col ===1) || (row===3 && col === 7))? theme.value:''}">
            x
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs} from 'vue'

export default defineComponent({
  name: 'datepicker-demo',
  data() {
    return {
      thName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  },
  props: {
    cssLists: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const {cssLists} = toRefs(props)
    const [theme, range, header, th, tbody] = cssLists.value
    return {
      theme, range, header, th, tbody
    }
  },
  methods: {
    getDay(row: number, col: number) {
      return (col - 1) + (row - 1) * 7
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./src/assets/date-picker";

.better-datepicker-wrapper {
  position: relative !important;
  display: inline-block;
  max-height: 357px !important;
}

table {
  margin-top: 0 !important;
}
</style>
