datepicker Type
##  Date

::: Default mode is Date, the basic unit is [day], and the day you choose is a **string** value.
```html
<Input width="20vw" id="dateInput">
<script>
    const input = document.querySelector('#dateInput')
    const picker = this.createDatePicker(input)
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
        type: 'date-range'
    })
</script>

```
:::

