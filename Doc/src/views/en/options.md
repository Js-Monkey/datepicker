#  Options

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
| type              |     type of picker     |   string     |   date/date-range/month/month-range/year/year-range/week     | date
| format              |    To set the date format   |   string     |   -     | yyyy/MM/d
| offset              |     Distance between Picker and inputElement    |   number     |   -    | 12
| zIndex              |      z-index of Picker    |   number     |   -     | 2000
| insertTo              |   Name of the node inserted    |   string     |   body/parent     | body
| binding              |    Bind the value of the inputElement    |   boolean     |   -     | true
| disabledDate              |   Specifies the date that cannot be selected , should return boolean     |   Function     |   -    | -
| disabled              |    To set inputElement disabled    |   boolean     |   -    | false
| placement              |     picker placement     |   string     |   top/bottom/right/left    | bottom
| themeColor              |     Theme color(selected、hover、range-start、range-end), like *#2ECC71*     |   string     |   -    | -
| rangeBgColor              |     The backgroundColor that element is in range ,It's usually lighter than the themeColor     |   string     |   -   | -
| tdColor  |     Td text color   |   string     |   -   | -
| thColor  |     Th text color   |   string     |   -   | -


## TODO

