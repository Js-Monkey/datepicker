<template>
    <svg class="f-icon" @click="$emit('click',$event)" :style="{fill:`${color}`,fontSize: fontWidth||width}" :class="{loading:loading}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import '../../../assets/svg/svg'

    export default {
        name: "f-icon",
        props: {
            name,
            fontSize:{
              type:Number|String,
              default: '1em '
            },
            width:{
              default:0,
              type:Number|String
            },
            color: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed:{
            fontWidth(){
                if(this.width)return 0
                return this.fontSize +'px'
            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .f-icon {
        width: 1em;
        height: 1em;

        &.loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
