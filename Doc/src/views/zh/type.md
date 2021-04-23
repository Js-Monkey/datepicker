datepicker Type 选择器类型
##  Date

::: 默认值是*date*, 单位是[**日**] 
```html
<Input width="20vw" id="dateInput">
<script>
    const input = document.querySelector('#dateInput')
    const picker = this.createDatePicker(input)
</script>

```
:::


##  Date-range
::: 选择时间范围，单位是[**日**] 
```html
<Input width="20vw" id="dateRangeInput">
<script>
    const input = document.querySelector('#dateRangeInput')
    const picker = this.createDatePicker(input, {
        type: 'date-range'
    })
</script>

```
:::


##  Month
::: 基础单位是[**月**]，日期是选择月份的**第一天**
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
::: 选择时间范围，单位是[**月**]
```html
<Input width="20vw" id="monthRangeInput">
<script>
    const input = document.querySelector('#monthRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'month-range'
    })
</script>

```
:::

##  Year
::: 单位是[**年**]
```html
<Input width="20vw" id="yearInput">
<script>
    const input = document.querySelector('#yearInput')
    const picker = this.createDatePicker(input,{
           type: 'year',
           placement:'top'
    })
</script>

```
:::

:::

##  Year-range
:::  选择时间范围，单位是[**年**]
```html
<Input width="20vw" id="yearRangeInput">
<script>
    const input = document.querySelector('#yearRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'year-range',
           placement:'top'   
    })
</script>

```
:::


##  Week
::: 得到的日期即是选择的日期，单位是[**日**]。输入框绑定的值是选择日期那周**第一天的周数**，可以被**format**覆盖。
值得注意的时候，如果**format** 包含*w*或者*ww*,那么最终处理显示在输入框上的日期依然会被设为当前周的第一天，当然，这不影响你选择日期的值。
```html
<Input width="20vw" id="weekInput">
<script>
    const input = document.querySelector('#weekInput')
    const picker = this.createDatePicker(input,{
           type: 'week',
           placement:'top'
               
    })
</script>

```
:::
