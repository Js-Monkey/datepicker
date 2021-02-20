# 日期选择器

## 基本用法
:::demo以在vue中使用为例
```html
<Input width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp = createPicker(this.$refs.int.$el,{
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
         this.dp =  createPicker(this.$refs.int.$el,{
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
         this.dp = createPicker(this.$refs.int.$el,{
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
<Input v-model="date" width="300" ref="int" />
<f-button @click="getDate">获取</f-button>
<script>
export default {
    mounted(){
         this.dp =  createPicker(this.$refs.int.$el,{
        type:'month'
})
  this.dp.onChange((date)=> this.date = date)
    },
data(){
return {
  dp: null,
  date: ''
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
         this.dp = createPicker(this.$refs.int.$el,{
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
