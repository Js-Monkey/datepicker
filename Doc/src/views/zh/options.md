#  Options

日期选择器配置

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


| Property     | Description | Type   | Accepted Values | Default |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| type              |    选择器类型      |   string     |   date/date-range/month/month-range/year/year-range     | date
| format              |    格式  |   string     |   -     | yyyy/MM/d
| offset              |    距离输入框的距离    |   number     |   -    | 12
| zIndex              |      弹出框的z-index    |   number     |   -     | 2000
| insertTo              |   设置弹出框的父节点，设置*body*可以规避 *overflow: hidden*    |   string     |   body/parent     | body
| binding              |   选择日期后是否改变输入框的值   |   boolean     |   -     | true
| disabledDate              |   决定日期是否被禁用   |   Function     |   -    | -
| disabled              |    是否禁用整个输出框    |   boolean     |   -    | false
| placement              |     弹出框弹出的位置    |   string     |   top/bottom/right/left    | bottom
| themeColor              |     主题颜色(selected、hover、range-start、range-end), like *#2ECC71*     |   string     |   -    | -
| rangeBgColor              |      处于时间范围的背景色   |   string     |   -   | -
| tdColor  |     Td文字颜色   |   string     |   -   | -
| thColor  |     Th文字颜色   |   string     |   -   | -


## TODO

