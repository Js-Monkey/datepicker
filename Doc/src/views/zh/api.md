# API


## 删除实例

**批量删除**, 如果不传参数, **则删除所有实例**
```js
  import {destroy} from "better-datepicker"

  const picker1 = createDatePicker('#input1')

  const picker1 = createDatePickerc('#input2')
  destroy([picker1,picker2]) // destroyed picker1 and picker 2
  destroy() //destroyed all 
```


## TODO
