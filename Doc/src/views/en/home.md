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

## METHODS

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

  picker.clear() // to clear picker

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


## destroy

```js
  import {destroy} from "better-datepicker"

  const picker1 = createDatePicker('#input1')

  const picker1 = createDatePickerc('#input2')
  destroy([picker1,picker2]) // destroyed picker1 and picker 2
  destroy() //destroyed all 
```

## DOCUMENT TODOLIST

| TODO     | VERSION   |
| ----------------- | -------------------------------- |
| Doc Support Mobile  |    0.3     |
| Support onOpen、onClose  |  0.4    |
| Support readonly、unlinkPanels、className、bordered、panelRender、size |  0.5    |
| -  |  -   |
