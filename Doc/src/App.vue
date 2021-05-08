<template>
  <Header/>
  <router-view />
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import Header from './components/Header/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  setup() {
    const lang = localStorage.getItem('lang') || 'en'
    const target = reactive({
      lang
    })
    if (!lang) {
      localStorage.setItem('lang', 'en')
    }

    function toggleLang() {
      target.lang = target.lang === 'zh' ? 'en' : 'zh'
      localStorage.setItem('lang', target.lang)
    }

    return {
      toggleLang,
      target
    }
  },
  provide() {
    return {
      bus: this
    }
  },
})
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

#nprogress .bar {
  background: rgb(198, 37, 36);
  position: fixed;
  top: 0;
  z-index: 9999;
  left: 0;
  height: 3px;
  width: 100%;
}

#app {

}
</style>
