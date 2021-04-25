<template>
  <div class="enter">
    <div class="start">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "Enter",
  components: {
  }
}
</script>

<style lang="scss">
@import "../../assets/style/global";

.enter {
  min-height: calc(100vh - 66px);
  background: #112232;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .install {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #264b61;
    text-align: center;
    color: #f9fdfe;
    padding: 9px;
    font-family: Menlo;
  }

  .start {
    width: 100%;
    margin-bottom: 100px;
  }

  .demo-bar {
    width: 100%;
    padding: 5px;
    font-size: 25px;
    color: white;
    text-align: center;
    background: #e84c3b;
  }

  .start {
    background: #112232;
    display: flex;
    justify-content: center;
  }


}


</style>
