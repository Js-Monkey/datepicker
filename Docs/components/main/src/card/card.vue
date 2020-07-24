<template>
    <div class="firm-main-card">
        <div class="card-group">
            <cardCompass></cardCompass>
            <cardComponent></cardComponent>
            <cardConcat></cardConcat>
        </div>
    </div>
</template>

<script>
    import cardComponent from './card-components'
    import cardCompass from './card-compass'
    import cardConcat from './card-concat'

    export default {
        name: "card",
        components:{
            cardComponent,
            cardCompass,
            cardConcat
        },
        data() {
            return {
                isActive: false,
            }
        },
        mounted() {
            setTimeout(()=>{
                this.isActive = true
            },100)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../assets/styles/color/color-select";
    .firm-main-card{
        background-color: $brand1-1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .card-group {
            display: flex;
            justify-content: center;
            margin-top: 50px;

        }
    }
    .active {
        opacity: 1;
        transform: translateY(10px);
        transition-delay: .3s;
    }

</style>
