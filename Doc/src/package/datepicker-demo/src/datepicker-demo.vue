<template>
  <div class="better-datepicker-wrapper">
    <div class="better-datepicker-header" style="width:298px;text-align:center">
      <svg viewBox="0 0 1024 1024" style="position:absolute;left:30px;width:14px;height:14px">
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
      <span style="display: none;">2020 - 2029</span><span class="better-datepicker-pointer-cursor "
                                                           style="display: inline-block;">XXX</span><span
      class="better-datepicker-pointer-cursor " style="display: inline-block;">xxxx</span>
      <svg viewBox="0 0 1024 1024" style="position:absolute;right:30px;transform:rotate(180deg);width:14px;height:14px">
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
    <table :style="{color: text}" class="better-datepicker-day"
           style="text-align: center; padding: 5px 20px; width: 320px; display: inline-block;">
      <thead>
      <th style="height:40px;width:40px;padding:3px 0">Su</th>
      <th style="height:40px;width:40px;padding:3px 0">Mo</th>
      <th style="height:40px;width:40px;padding:3px 0">Tu</th>
      <th style="height:40px;width:40px;padding:3px 0">We</th>
      <th style="height:40px;width:40px;padding:3px 0">Th</th>
      <th style="height:40px;width:40px;padding:3px 0">Fr</th>
      <th style="height:40px;width:40px;padding:3px 0">Sa</th>
      </thead>
      <tbody>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="pre">
          <div>28</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>1</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>2</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>3</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>4</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>5</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>6</div>
        </td>
      </tr>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="other range-start">
          <div :style="{background: theme}">7</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other inRange">
          <div :style="{background: range}">8</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other inRange">
          <div :style="{background: range}">9</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other inRange">
          <div :style="{background: range}">10</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other inRange">
          <div :style="{background: range}">11</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other inRange">
          <div :style="{background: range}">12</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other range-end">
          <div :style="{background: theme}">13</div>
        </td>
      </tr>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>14</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>15</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>16</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>17</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>18</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>19</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>20</div>
        </td>
      </tr>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>21</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>22</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>23</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" :style="{color: theme}" class="other">
          <div>24</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>25</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>26</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>27</div>
        </td>
      </tr>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>28</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>29</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>30</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="other">
          <div>31</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>1</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>2</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>3</div>
        </td>
      </tr>
      <tr>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>4</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>5</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>6</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>7</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>8</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>9</div>
        </td>
        <td style="height:40px;width:40px;padding:3px 0" class="next">
          <div>10</div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="better-datepicker-month" style="text-align: center; padding: 5px 20px; width: 320px; display: none;">
      <tbody>
      <tr>
        <td>
          <div>
            <div>Jan</div>
          </div>
        </td>
        <td>
          <div>
            <div>Feb</div>
          </div>
        </td>
        <td>
          <div>
            <div>Mar</div>
          </div>
        </td>
        <td>
          <div>
            <div>Apr</div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div>
            <div>May</div>
          </div>
        </td>
        <td>
          <div>
            <div>Jun</div>
          </div>
        </td>
        <td>
          <div>
            <div>Jul</div>
          </div>
        </td>
        <td>
          <div>
            <div>Aug</div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div>
            <div>Sep</div>
          </div>
        </td>
        <td>
          <div>
            <div>Oct</div>
          </div>
        </td>
        <td>
          <div>
            <div>Nov</div>
          </div>
        </td>
        <td>
          <div>
            <div>Dec</div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs,} from 'vue'

export default defineComponent({
  name: 'datepicker-demo',
  props:{
    cssLists:{
      type:Array
    }
  },
  computed:{
    theme(){
      return this.cssLists[0].value
    },
    range(){
      return this.cssLists[1].value
    },
    text(){
      return this.cssLists[2].value
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./src/assets/date-picker";

.better-datepicker-wrapper {
  position: relative !important;
  display: inline-block;
  max-height:  357px !important;
}

table {
  margin-top: 0 !important;
}
</style>
