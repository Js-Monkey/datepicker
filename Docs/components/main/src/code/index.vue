<template>
    <div class="flex-main-code-wrapper">
       <div class="flex-main-code">
           <Code></Code>
       </div>
    </div>
</template>

<script>
    import Code from './code.md'
    export default {
        name: "index",
        components:{Code}
    }
</script>

<style lang="scss">
    .flex-main-code{
        width: 58vw;
       &-wrapper{
           padding-top: 40px;
           padding-bottom: 80px;
           background-color: #313639;
           display: flex;
           justify-content: center;
           pre{
               margin: 0;
               code{
                   border-radius: 0;
               }
               &:first-child{
                code{
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
               }
               &:last-child{
                   code{
                       border-bottom-left-radius: 5px;
                       border-bottom-right-radius: 5px;
                   }
               }
           }
       }
    }
</style>
