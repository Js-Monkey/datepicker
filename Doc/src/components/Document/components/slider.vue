<template>
  <div class="slider">
    <ul>
      <li :class="{secondLevel: isSecondLevel(list)}" @click="toRoute(list.name)" v-for="list in routeLists">
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
  methods: {
    toRoute(name) {
      this.$router.push({name})
    },
    isSecondLevel(list){
      return list.path.indexOf('/')> -1
    }
  }
}
</script>

<style scoped lang="scss">
@import "./Doc/src/assets/style/global";
.slider {
  width: 210px;
  height: calc(100vh - 66px);
 // background: #FF3643;
  background: #011629;
  box-shadow: $shadow-left;
  z-index: 1000;
  overflow-y: auto;
  color: #ffffff;
  font-size: 20px;
  font-family: Futura;

  ul {
    list-style: none;

    li {
      margin-top: 10px;
      cursor: pointer;
      transition: .23s color;
      &:hover{
        color: #ffb311;
      }
    }
    .secondLevel{
      padding-left: 20px;
      font-size: 15px;
    }
  }
}
</style>
