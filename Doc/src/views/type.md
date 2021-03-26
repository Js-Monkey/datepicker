##  Date

::: Default mode is Date, the basic unit is [day], and the day you choose is a **string** value.
```html
<Input width="20vw" id="dateInput">
<script>
    const input = document.querySelector('#dateInput')
    const picker = this.createDatePicker(input,{
       themeColor: '#1890ff'
    })
</script>

```
:::


##  Date-range
::: **date-range** mode can choose the start time and the end time. The range you choose is a **date range**.
By default, the two interval panels are linked to each other, or you can use *unlinkPanels* to unlink the panels.
```html
<Input width="20vw" id="dateRangeInput">
<script>
    const input = document.querySelector('#dateRangeInput')
    const picker = this.createDatePicker(input, {
        type: 'date-range',
        placement: 'bottom',
        themeColor: '#1890ff'
    })
</script>

```
:::


##  Month
::: The basic unit is [month], and the date you choose is accurate to [day], which is the first day of the month
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
::: The basic unit is [month], and the range you choose is a **month range**
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
