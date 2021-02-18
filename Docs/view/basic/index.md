# 日期选择器

## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = new better(this.$refs.int.$el,{
        type:'month-range'
})

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

## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = new better(this.$refs.int.$el,{
        type:'date-range'
})

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

## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = new better(this.$refs.int.$el,{
        type:'month-range'
})

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


## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = new better(this.$refs.int.$el,{
        type:'month'
})

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

## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = new better(this.$refs.int.$el,{
        type:'date'
})

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
