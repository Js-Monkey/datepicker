# Options

configuration of better-datepicker

```js
const input = document.querySelector('#input')
const options = {
  placement: 'bottom',
  type: 'date',
  zIndex: 2000,
  format: 'yyyy/MM/dd',
}
createDatePicker(input,options)
```

**Global config**

```
import {locale,defaultOptions} from 'better-datepicker'
defaultOptions({
    themeColor: '#1890ff',
    rangeBgColor: '#e6f7ff',
    tdColor: '#5f5f5f',
    thColor: '#5f5f5f'
})
```

| Property     | Description | Type   | Accepted Values | Default |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| type | Type of datepicker | string | date/date-range/month/month-range/year/year-range/week | date |
| format | To set the date format | string | - | yyyy/MM/dd |
| classes | To set the picker wrapper classes(**It will have a logo prefix: better-datepicker**) | string[] | - | - |
| zIndex   |      z-index of Picker    |   number     |   -     | 2000
| style | To set the picker wrapper style(**zIndex Priority is lower than above**) | Object  | - | - |
| placement | Placement of datepicker | string | top/bottom/right/left | bottom |
| disabledDate | Specifies the date that cannot be selected | function | - | - |
| offset | Distance between Picker and inputElement | number | - | 12 |
| insertTo | Name of the node inserted | string | body/parent | body |
| binding | Bind the value of the inputElement | boolean | - | true |
| themeColor  |     Theme color(selected、hover、range-start、range-end), like *#2ECC71*     |   string     |   -    | -
| rangeBgColor  |     The backgroundColor that element is in range ,It's usually lighter than the themeColor     |   string     |   -   | -
| tdColor  |     Td text color   |   string     |   -   | -
| thColor  |     Th text color   |   string     |   -   | -

## TODO

