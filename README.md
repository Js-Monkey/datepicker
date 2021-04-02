<!-- <HEADER> // IGNORE IT -->


# Better-datepicker
A PC Datepicker

![](https://camo.githubusercontent.com/b39d1e12ba779319ff9bab0f56ba7e41f108d898/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6a756d6f646164612f76756558696e2e737667)
![code-test](https://github.com/Js-Monkey/better-datepicker/workflows/code-test/badge.svg)
![](https://www.travis-ci.org/Js-Monkey/better-datepicker.svg?branch=master)
![](https://img.shields.io/codecov/c/github/js-monkey/better-datepicker/master.svg)
![](http://img.badgesize.io/https://unpkg.com/better-datepicker@0.0.7/dist/betterDatePicker.es5.js)
[![install size](https://packagephobia.com/badge?p=better-datepicker)](https://packagephobia.com/result?p=better-datepicker)

## Doc
https://js-monkey.github.io/better-datepicker/

## Demo

<img width="240px" src="https://raw.githubusercontent.com/jumodada/img-store/main/better-datepciker-demo.png"/>

## Installing

Using npm:

```bash
$ npm i better-datepicker
```

Using yarn:

```bash
$ yarn add better-datepicker
```

## Usage

es6
```js
import  {createDatePicker} from 'better-datepicker'
import 'better-datepicker/index.css'
```
CommonJS

```js
const {createDatePicker} = require('better-datepicker').default
require('better-datepicker/index.css')
```


## Example

```html
<input type="text" id="input">
```

```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```

you can also 

```html
  <div id="wrapper">
     <span>Including children, find the first inputElement</span>
     <input type="text">
  </div>
  <script >
    const input = document.querySelector('#wrapper')
    createDatePicker(input,{
      placement: 'bottom',
      type: 'date',
      zIndex: 2000,
      format: 'yyyy/MM/dd'
    })
  </script>
```

todo: support virtual dom

# Options Validator

If the format is illegal, it will use default value

## Options

| Options | Description | Type | Accepted Values | Default |
|---------|------------ |---------- |-------------  |-------- |
| type | Type of datepicker | string | date/date-range/month/month-range/year/year-range | date |
| format | To set the date format | string | - | yyyy/mm/dd |
| placement | Placement of datepicker | string | top/bottom/right/left | bottom |
| disabledDate | Specifies the date that cannot be selected | function | - | - |
| offset | Distance between Picker and inputElement | number | - | 12 |
| insertTo | Name of the node inserted | string | body/parent | body |
| binding | Bind the value of the inputElement | boolean | - | true |
| themeColor  |     Theme color(selected、hover、range-start、range-end), like *#2ECC71*     |   string     |   -    | -
| rangeBgColor  |     The backgroundColor that element is in range ,It's usually lighter than the themeColor     |   string     |   -   | -
| tdColor  |     Td text color   |   string     |   -   | -
| thColor  |     Th text color   |   string     |   -   | -


## Default Options

global config

```js
  import {defaultOptions} from "better-datepicker"
  defaultOptions(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```

## Theme

you can use **defaultOptions**


```js
  import {defaultOptions} from "better-datepicker"
  defaultOptions(input,{
    themeColor: '#1890ff',
    rangeBgColor: '#e6f7ff',
    tdColor: '#5f5f5f',
    thColor: '#5f5f5f'
  })
```

or 

only changes theme of the current instance

```js
     const input = document.querySelector('#wrapper')
     const instance = createDatePicker(input,{
         themeColor: '#1890ff',
         rangeBgColor: '#e6f7ff',
         tdColor: '#5f5f5f',
         thColor: '#5f5f5f'
     })
```


## Instance methods

| name | Description | params |
|---------|------------ |------------ |
| destroyed | destroyed the datepicker,clear InputElement value| -
| onChange | called callback when date has changed |(callback)
| update | Update configuration, remove old datepicker | (options)
| getCurrentDate | get current date | -
| open | open the datepicker | -
| close | close the datepicker | -
| clear | clear the date | -

## TODO LIST

| versions | Description|
|---------|------------ |
| 0.2.0 | support week |
| 0.3.0 | support i18n |
| 0.5.0 | support unlinkPanels、zIndex、readonly、disabled、default-value |
| 0.7.0 | - |

## Browser support

todo
