<template>
  <div class="header">
    <div class="header-logo">
      <router-link :to="'/'">
        <b-icon name="better" :font-size="60"></b-icon>
      </router-link>
    </div>
    <div class="header-nav">
      <b-icon :font-size="14" name="left"></b-icon>
      <div class="header-nav">
        <router-link class="header-nav-item" v-for="(item,index) in routeLists" :to="`/${bus.target.lang}/${item.value}`"
                     :key="index">
          {{ item.name }}
        </router-link>
      </div>
      <b-icon :font-size="14" name="right"></b-icon>
    </div>
    <div class="header-icons">
      <b-icon @click="toggleLang" :font-size="23" fill="#ffffff" :name="bus.target.lang"></b-icon>
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
      zh: [
        {name: '首页', value: ''},
        {name: '文档', value:'doc'}
      ],
      en: [
        {name: 'Home', value: ''},
        {name: 'Document', value:'doc'}
      ]
    }
  },
  computed:{
    routeLists(){
      return this[this.bus.target.lang]
    }
  },
  inject:['bus'],
  methods: {
    toggleLang() {
      const preLang = this.bus.target.lang
      this.bus.toggleLang()
      this.$router.push(this.$route.path.replace(preLang, this.bus.target.lang));
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../assets/style/global";

$header-bg: $black;
$header-height: 66px;
.header {
  z-index: 2001;
  position: relative;
  height: $header-height;
  display: flex;
  align-items: center;
  padding: $padding-left-more;
  background: $header-bg;

  &-logo {
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
      position: relative;

      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 100%;
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

  &-icons {
    margin-left: 50px;
    height: $header-height;
    display: flex;
    align-items: center;

    a {
      margin-top: 3px;
      display: inline-block;
    }

    svg {
      transition: .32s all;
      cursor: pointer;
      margin-left: 5px;
      margin-right: 5px;

      &:hover {
        transform: rotate(8deg);
      }
    }
  }
}
</style>
