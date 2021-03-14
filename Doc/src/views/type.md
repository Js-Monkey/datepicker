##  Date
::: 默认为Date模式
```html
<Input width="20vw" id="dateInput">
<script>
    const input = document.querySelector('#dateInput')
    const picker = this.createDatePicker(input)
</script>

```
:::


##  Date-range
::: 默认为Date模式
```html
<Input width="20vw" id="dateRangeInput">
<script>
    const input = document.querySelector('#dateRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'date-range'
    })
</script>

```
:::


##  Month
::: 默认为Date模式
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
::: 默认为Date模式
```html
<Input width="20vw" id="monthRangeInput">
<script>
    const input = document.querySelector('#monthRangeInput')
    const picker = this.createDatePicker(input,{
           type: 'month-range',
           placement:'top'
    })
</script>

```
:::
