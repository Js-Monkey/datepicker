##  Date
::: Date为默认模式, 基本单位为[日]，返回date为一个**string**
```html
<Input width="20vw" id="dateInput">
<script>
    const input = document.querySelector('#dateInput')
    const picker = this.createDatePicker(input)
</script>

```
:::


##  Date-range
::: **date-range**模式可以选择选择开始时间和结束时间，返回的date是一个**日期区间**，为日期区间。
默认两个区间面板是相互联动的，或者你可以使用*unlinkPanels*取消面板联动
```html
<Input width="20vw" id="dateRangeInput">
<script>
    const input = document.querySelector('#dateRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'date-range',
           placement: 'left'
    })
</script>

```
:::


##  Month
::: 基本单位为[月]，返回的日期精确到[日]是当月的第一天
```html
<Input width="20vw" id="monthInput">
<script>
    const input = document.querySelector('#monthInput')
    const picker = this.createDatePicker(input,{
           type: 'month'
    })
</script>

```
:::


##  Month-range
::: 基本单位为[月]，返回的是一个**日期区间**
```html
<Input width="20vw" id="monthRangeInput">
<script>
    const input = document.querySelector('#monthRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'month-range',
           placement:'left'
    })
</script>

```
:::
