## START
 Import styles, **or you can customize theme colors** [Here](#/doc/theme)
```js
  import  {createDatePicker} from 'better-datepicker'
  import 'better-datepicker/style/index.css'

```


## OPTIONS
  *createDatePicker* accepts two parameters.
  The first is the **InputElement**, and the second is the **configuration item**. For more details [Here](#/doc/options)
```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```
