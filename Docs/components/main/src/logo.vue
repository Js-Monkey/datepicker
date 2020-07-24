<template>
    <div class="flex-logo">
        <f-icon width="23rem" name="flex"></f-icon>
        <div>
            <f-button @click="toStart" class="flex-logo-enter" type="warn"> 快速上手 →</f-button>
        </div>
    </div>
</template>

<script>
    import Code from '../../../view/components/API/index.md'

    export default {
        name: "card",
        components: {
            Code
        },
        data() {
            return {
                isActive: false,
            }
        },
        methods:{
            toStart(){
                this.$router.push({
                    path:'components/start'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/styles/color/color-select";

    .description {
        color: $text1-light;
        margin-top: 30px;
        font-size: 30px;
        opacity: 0;
        transition: all .3s ease-out;
    }

    .flex-logo {
        background-color: $brand1-1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title {
            font-size: 2rem;
            color: white;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        }
        &-enter{
            width: 140px;
            height: 60px;
            font-size: 17px !important;
        }
    }

    .active {
        opacity: 1;
        transform: translateY(10px);
        transition-delay: .3s;
    }

</style>
