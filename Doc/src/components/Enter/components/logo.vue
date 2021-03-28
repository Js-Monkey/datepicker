<template>
  <div class="enter-button">
    <b-icon class="logo" :font-size="300" name="better1"></b-icon>
    <div class="enter-button-description">
      A Datepicker with no dependency
      <br>
      Lighter and Better
    </div>
    <b-button @click="toDocument" style="background: rgb(198 37 36);" class="better-logo-enter" type="warn"
              icon="forward" position="right">
      Document
    </b-button>
  </div>
</template>

<script>
export default {
  name: "logo",
  methods: {
    toDocument() {
      this.$router.push({
        name: 'start'
      })
    }
  }
}
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
  &-description{
    color: #ECF0F1;
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
