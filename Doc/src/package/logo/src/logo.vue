<template>
  <div class="enter-button">
    <b-icon class="logo" :font-size="300" name="better1"></b-icon>
    <div class="enter-button-description">
      {{ descriptions }}
    </div>
    <b-button @click="toDocument" style="background: rgb(198 37 36);" class="better-logo-enter" type="warn"
              icon="forward" position="right">
      {{ buttonName }}
    </b-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "logo",
  data() {
    return {
      zh: {
        description: '一个仅9k的日期选择器',
        buttonName: '快速开始'
      },
      en: {
        description: 'A PC Datepicker with only 9KB',
        buttonName: 'Start'
      }
    }
  },
  computed: {
    descriptions() {
      return this[this.bus.target.lang].description
    },
    buttonName() {
      return this[this.bus.target.lang].buttonName
    }
  },
  inject: ['bus'],
  methods: {
    toDocument() {
      this.$router.push({
        path: this.$route.path + '/doc/start'
      })
    }
  },
})
</script>

<style scoped lang="scss">
button {
  font-family: Menlo;
}

.logo {
  margin-right: 15px;
}

.enter-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  font-family: Futura, sans-serif;

  &-description {
    color: #ECF0F1;
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
