# START

首先使用 **npm** 或者 **yarn** 安装  *better-datepicker*

```shell script
npm install better-datepicker
yarn add better-datepicker
```

然后引入 *better-datepicker* 和 *css文件*

```js
import {createDatePicker} from 'better-datepicker'
import 'better-datepicker/dist/index.css'
```

## CreateDatePicker 创建日期选择器

*createDatePicker*接受两个参数 **输出框节点**和**局部配置**

```
    const input = document.querySelector('#input')
    const picker = createDatePicker(input,{
           type: 'week',
           offset: 20,
           placement: 'bottom' 
    })
```
## defaultOptions 全局默认配置


```
import {locale,defaultOptions} from 'better-datepicker'
defaultOptions({
    themeColor: '#1890ff',
    rangeBgColor: '#e6f7ff',
    tdColor: '#5f5f5f',
    thColor: '#5f5f5f'
})
```


## locale 地区配置

```
import {locale} from 'better-datepicker'
import ZH from 'better-datepicker/dist/locale_es/zh-cn'
locale(ZH)
```
