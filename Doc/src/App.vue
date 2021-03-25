<template>
  <Header/>
  <router-view/>
  <input type="text" id="xx">
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
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
