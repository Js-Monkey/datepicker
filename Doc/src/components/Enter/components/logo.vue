<template>
  <b-icon font-size="30vw" name="better1"></b-icon>
  <div>
    <b-button @click="toDocument" style="background: rgb(198 37 36);" class="better-logo-enter" type="warn" icon="forward" position="right">
      Document
    </b-button>
  </div>
</template>

<script>
export default {
  name: "logo",
  methods:{
    toDocument(){
      this.$router.push({
        name:'start'
      })
    }
  }
}
</script>

<style scoped lang="scss">
button {
  font-family: Menlo;
}

svg {
  width: 40vw !important;
  height: 25vw !important;
}
</style>
