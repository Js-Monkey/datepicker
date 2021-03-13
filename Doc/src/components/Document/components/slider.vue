<template>
  <div class="slider">
   <ul>
     <li @click.stop="toRoute(list.name)" v-for="list in routeLists">
       {{ list.name }}
     </li>
   </ul>
  </div>
</template>

<script>
import {toRefs} from 'vue'

export default {
  name: "slider",
  props: {
    route: {
      type: Object
    }
  },
  setup(props) {
    const route = toRefs(props).route.value
    const documentList = route.options
    const routeLists = documentList.routes[1].children
    return {
      routeLists
    }
  },
  methods:{
    toRoute(name){
      this.$router.push({name})
    }
  }
}
</script>

<style scoped lang="scss">
.slider {
  width: 210px;
  height: calc(100vh - 66px);
  background: #FF3643;
  overflow-y: auto;
}
</style>
