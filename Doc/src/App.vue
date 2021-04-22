<template>
  <Header/>
  <router-view/>
  {{lang}}
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  setup(){
    const target = reactive({lang: 'zh'})
    function toggleLang(){
      target.lang = target.lang === 'zh'? 'en' : 'zh'
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

#app {

}
</style>
