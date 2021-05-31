<template>
  <div class="document">
    <Slider :route="$router"></Slider>
    <documentContent></documentContent>
  </div>
</template>

<script>
import Slider from './components/slider.vue'
import documentContent from './components/content.vue'

export default {
  name: "Document",
  components: {Slider, documentContent},
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.document {
  display: flex;
}
</style>
