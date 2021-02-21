<template>
    <svg class="b-icon" @click="$emit('click',$event)" :style="{fill:`${color}`,fontSize: fontWidth||width}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script lang="ts">
    import '../../../assets/svg/svg'
    import {defineComponent} from 'vue'
    export default defineComponent({
      name: 'b-icon'
    })
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

    .b-icon {
        width: 1em;
        height: 1em;

        &.loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
