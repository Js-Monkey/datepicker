#  Theme 主题

提供三种方式用于修改*主题*

## SCSS Variables 

`better-datepicker` uses **SCSS** as a pre-compiled language for the selector, you can modify it by downloading  <a href="https://github.com/Js-Monkey/better-datepicker/blob/master/src/assets/date-picker.scss" target="_blank">scss code</a> directly.

Of course, you need to use *loader* to parse the code.

```scss
$theme-color: #2ECC71;
$range-color: #eafaf1;
$text-header-color: #858585;
$text-th-color: #969595;
$text-tbody-color: #5f5f5f;
```
## Style Configuration 配置下载
配置完成后，下载引入

<theme-card></theme-card>

## Options 全局配置

```js
  import {defaultOptions} from "better-datepicker"
  defaultOptions({
    themeColor: '#1890ff',
    rangeBgColor: '#e6f7ff',
    tdColor: '#5f5f5f',
    thColor: '#5f5f5f'
  })
```

或者局部配置


```js
const input = document.querySelector('#input')
const instance = createDatePicker(input,{
  themeColor: '#2a3a4a',
  rangeBgColor: '#bbbbbb',
  tdColor: '#5f5f5f',
  thColor: '#5f5f5f'
})

```
