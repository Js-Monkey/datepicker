<template>
  <div class="header">
    <div class="header-logo">
      <b-icon name="better" :font-size="60"></b-icon>
    </div>
    <div class="header-nav">
      <b-icon :font-size="14" name="left"></b-icon>
      <div class="header-nav">
        <router-link class="header-nav-item" v-for="(item,index) in routerItems" :to="`/${item.value}`"
                     :key="index">
          {{ item.name }}
        </router-link>
      </div>
      <b-icon :font-size="14" name="right"></b-icon>
    </div>
    <div class="header-github">
      <a href="https://github.com/Js-Monkey/better-datepicker" target="_blank">
        <b-icon :font-size="23" name="github1"></b-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      routerItems: [
        {name: '首页', value: ''},
        {name: '安装', value: 'doc'},
      ],
    }
  }
})
</script>

<style scoped lang="scss">
@import "../assets/style/global";

$header-bg: $black;
$header-height: 66px;
.header {
  height: $header-height;
  display: flex;
  align-items: center;
  padding: $padding-left-more;
  background: $header-bg;

  &-logo{
    cursor: pointer;
  }
  &-nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    font-size: $font-size-small;

    a {
      text-decoration: none;
      color: $text-light;
    }

    &-item {
      margin: 0 9px;

      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 25px;
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
  }

  &-github {
    margin-left: 50px;
    height: $header-height;
    display: flex;
    align-items: center;
    a{
      margin-top: 3px;
      display: inline-block;
    }
    svg {
      transition: .32s all;
      cursor: pointer;

      &:hover {
        transform: rotate(8deg) ;
      }
    }
  }
}
</style>
