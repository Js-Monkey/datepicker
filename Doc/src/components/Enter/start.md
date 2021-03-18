## START
 Import styles, **or you can customize theme colors** [Here](#/doc/theme)
```js
  import  {createDatePicker} from 'better-datepicker'
  import 'better-datepicker/style/index.css'

```


## OPTIONS
 **createDatePicker**接受两个参数，第一个是需要绑定的元素，第二个是配置项, 更多详细**Options 配置** [Here](#/doc/options)
```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```
