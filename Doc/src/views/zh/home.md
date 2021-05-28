<logo></logo>


<install-card-group></install-card-group>  

## START
 引入样式, **或者你可以自定义主题颜色** [这里](#/en/doc/theme)
```js
  import  {createDatePicker} from 'better-datepicker'
  import 'better-datepicker/dist/index.css'

  const input = document.querySelector('#input')
  createDatePicker(input)
```

你同样可以

```html
  <div id="wrapper">
     <span>如果传入的dom节点不是Input元素，则会在子元素里面逐级寻找</span>
     <input type="text">
  </div>
```
```js
  const input = document.querySelector('#wrapper')
  createDatePicker(input)
```


## OPTIONS
  *createDatePicker* 接受两个参数
  第一个是需要绑定的**输入框节点**, 第二个是选择器局部配置[更多详情](#/en/doc/options)
```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```

## METHODS 实例方法

```js
  const input = document.querySelector('#input')
  const picker = createDatePicker(input)

  picker.destroyed() //destroyed the datepicker

  picker.update({placement: 'top'}) //Update configuration, destroyed old datepicker

  picker.onChange((date)=>{
    console.log('The current date is ' + date)
  })

  picker.getCurrentDate()

  picker.open()  // to open picker

  picker.close() // to close picker

  picker.clear() 

  //more
```

##  Locale 地区

**全局配置**

```js
  import {locale} from "better-datepicker"
  import zhCn from 'better-datepicker/dist/locale_es/zh-cn'    // es
  //require('better-datepicker/dist/locale_umd/zh-cn') // cjs
  locale(zhCn)
```

如果安装包没有提供的地区文件，可以自定义
```js
  const localeConfig = {
     name: "en",
     weekStart: 0,
     yearStart: 1,
     weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
     months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
     yearFormat: "yyyy",
     weekFormat: 'yyyy-ww'
  }
  locale(en)
```

## destroy 删除所有实例

```js
  import {destroy} from "better-datepicker"

  const picker1 = createDatePicker('#input1')

  const picker1 = createDatePickerc('#input2')
  destroy([picker1,picker2]) // 删除 picker1 和 picker 2
  destroy() // 如果不传参，则默认是删除所有实例
```


## DOCUMENT TODOLIST

| TODO     | VERSION   |
| ----------------- | -------------------------------- |
| Doc Support Mobile  |    0.3     |
| Support onOpen、onClose  |  0.4    |
| Support readonly、unlinkPanels、className、bordered、panelRender、size |  0.5    |
| -  |  -   |
