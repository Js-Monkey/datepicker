<!-- <HEADER> // IGNORE IT -->

![](https://camo.githubusercontent.com/b39d1e12ba779319ff9bab0f56ba7e41f108d898/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6a756d6f646164612f76756558696e2e737667)
![code-test](https://github.com/Js-Monkey/better-datepicker/workflows/code-test/badge.svg)
![](https://www.travis-ci.org/Js-Monkey/better-datepicker.svg?branch=master)
![](https://img.shields.io/codecov/c/github/js-monkey/better-datepicker/master.svg)
![](http://img.badgesize.io/https://unpkg.com/better-datepicker@0.0.7/dist/betterDatePicker.es5.js)
[![install size](https://packagephobia.com/badge?p=better-datepicker)](https://packagephobia.com/result?p=better-datepicker)

## Doc
TODO

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

## Options

| Options | Description | Type | Accepted Values | Default |
|---------|------------ |---------- |-------------  |-------- |
| type | Type of datepicker | string | date/date-range/month/month-range | date |
| format | To set the date format | string | - | yyyy/mm/dd |
| placement | Placement of datepicker | string | top/bottom/right/left | bottom |
| disabledDate | Specifies the date that cannot be selected | function | - | - |
| offset | Distance between Picker and inputElement | number | - | 12 |
| insertTo | Name of the node inserted | string | body/parent | body |
| binding | Bind the value of the inputElement | boolean | - | true |

## Instance methods

| name | Description | params |
|---------|------------ |------------ |
| destroyed | destroyed the datepicker,clear InputElement value| -
| onChange | called callback when date has changed |(callback)
| updateOptions | Update configuration, remove old datepicker | (options)
| getCurrentDate | get current date | -

## TODO LIST

| versions | Description|
|---------|------------ |
| 0.1.0 | type support week/year/year-range|
| 0.3.0 | instance methods support open、close |
| 0.5.0 | methods support  set defaultOptions |
| 0.7.0 | options support unlinkPanels、zIndex、readonly、disabled、default-value |
| 0.9.0 | - |

## Browser support

todo



