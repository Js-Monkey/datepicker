# 日期选择器

## 基本用法
::: 坑坑坑
```html
<b-button @click="getDate">获取</b-button>
<script>
export default {
    mounted(){


    },
data(){
return {
  dp: null
}
},
    methods:{
    getDate(){
        console.log(this.dp.getDate())
    }

}

}
</script>

```
:::
