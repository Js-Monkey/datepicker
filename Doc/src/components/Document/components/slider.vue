<template>
  <div class="slider">
    <ul>
      <li :class="{secondLevel: list.isSecondLevel}" @click="toRoute(list.name)" v-for="list in routeLists">
        <span v-if="list.metaName" class="metaName">{{ list.metaName }}</span>
        <span v-else>{{ list.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "slider",
  props: {
    route: {
      type: Object
    }
  },
  inject: ['bus'],
  computed: {
    routeLists() {
      const documentList = this.route.options
      if (this.bus.target.lang === 'en') {
        return documentList.routes[1].children
      } else {
        return documentList.routes[2].children
      }
    }
  },

  methods: {
    toRoute(name) {
      this.$router.push({name})
    },
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
  font-family: Futura, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  ul {
    list-style: none;

    li {
      margin-top: 10px;
      cursor: pointer;
      transition: .23s color;
      font-size: 16px;

      &:hover {
        color: #ffb311;
      }

      .metaName {
        margin-left: 6px;
        color: #efeedd;
        font-size: 13px;
      }
    }

    .secondLevel {
      padding-left: 20px;
      font-size: 15px;
    }
  }
}
</style>
