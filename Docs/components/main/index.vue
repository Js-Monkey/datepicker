<template>
    <div class="firm-main">
        <logo></logo>
        <card></card>
        <Code></Code>
    </div>
</template>

<script>
    import {destroyEventListener, elementShowAddActive} from "../../utils/lazy-active"
    import card from "./src/card/card"
    import logo from './src/logo'
    import Code from './src/code/index'
    export default {
        name: "Main",
        components: {logo,card,Code},
        mounted() {
            elementShowAddActive(this)
        },
        beforeDestroy(){
          destroyEventListener()
        },
        methods: {}

    }
</script>

<style scoped lang="scss">

    body {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100vh;
    }


</style>
