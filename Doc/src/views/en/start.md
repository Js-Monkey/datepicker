# START

First, use **npm** or **yarn** to install *better-datepicker*

```shell script
npm install better-datepicker
yarn add better-datepicker
```

Then, import *better-datepicker* and css

```js
import  {createDatePicker} from 'better-datepicker'
import 'better-datepicker/dist/index.css'
```

## CreateDatePicker

createDatePicker accepts two parameters. The first is the InputElement, and the second is the configuration item.

```
    const input = document.querySelector('#input')
    const picker = createDatePicker(input,{
           type: 'week',
           offset: 20,
           placement: 'bottom' 
    })
```

## defaultOptions

```
import {locale,defaultOptions} from 'better-datepicker'
defaultOptions({
    themeColor: '#1890ff',
    rangeBgColor: '#e6f7ff',
    tdColor: '#5f5f5f',
    thColor: '#5f5f5f'
})
```

## locale

```
import {locale} from 'better-datepicker'
import ZH from 'better-datepicker/dist/locale_es/zh-cn'
locale(ZH)
```


