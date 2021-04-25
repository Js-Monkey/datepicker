<logo></logo>


<install-card-group></install-card-group>  

## START
 Import styles, **or you can customize theme colors** [Here](#/en/doc/theme)
```js
  import  {createDatePicker} from 'better-datepicker'
  import 'better-datepicker/dist/index.css'

```

you can also 

```html
  <div id="wrapper">
     <span>Including children, find the first inputElement</span>
     <input type="text">
  </div>
```
```js
  const input = document.querySelector('#wrapper')
  createDatePicker(input)
```


## OPTIONS
  *createDatePicker* accepts two parameters.
  The first is the **InputElement**, and the second is the **configuration item**. For more details [Here](#/en/doc/options)
```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```

## INSTANCE METHODS

```js
  const input = document.querySelector('#input')
  const instance = createDatePicker(input)

  instance.destroyed() //destroyed the datepicker

  instance.update({placement: 'top'}) //Update configuration, destroyed old datepicker

  instance.onChange((date)=>{
    console.log('The current date is ' + date)
  })

  instance.getCurrentDate()

  //more
```

##  Locale

**global config**

```js
  import {locale} from "better-datepicker"
  import zhCn from 'better-datepicker/dist/locale_es/zh-cn'    // es
  //require('better-datepicker/dist/locale_umd/zh-cn') // cjs
  locale(zhCn)
```

or
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



## DOCUMENT TODOLIST

| TODO     | VERSION   |
| ----------------- | -------------------------------- |
| Doc Support Mobile  |    0.3     |
| Support onOpen、onClose  |  0.4    |
| Support readonly、unlinkPanels、className、bordered、panelRender、size |  0.5    |
| -  |  -   |
