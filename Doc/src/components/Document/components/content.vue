<template>
  <div class="components-content-wrapper">
    <div class="components-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style lang="scss">

.components-content {
  width: 70%;
  background: #112232;
  padding: 20px 20px 20px 100px;
  color: #dae3f6;
  font-family: Futura;
  &-wrapper{
    width: 100%;
    background: #112232;
    display: flex;
    justify-content: center;
    height: calc(100vh - 66px);
    overflow-y: auto;
  }

  table {
    width: 100%;
    margin-top: 100px;
    border-collapse: collapse;
    font-family: Menlo;
  }

  h1 {
    color: #ffb311;
  }

  h2 {
    color: #eec15c;
  }

  h3 {
    color: #eac674;
  }

  th {
    color: #e84c3b;
    text-align: start;
    padding: 10px;
  }

  td {
    font-size: 14px;

    &:nth-child(odd) {
      color: #eec15c;
      font-size: 16px;
    }

    &:nth-child(3) {
      color: #48f68d;
      font-size: 16px;
    }

    &:nth-child(5) {
      color: #8189f1;
      font-size: 16px;
    }

    padding: 10px;
  }

  tr {
    border-bottom: 1px solid #ffffff !important;
  }
  em{
    color: #3498DB;
  }
}
</style>
