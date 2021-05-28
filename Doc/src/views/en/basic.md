Datepicker options 
##  format

::: 
```html
<Input width="20vw" id="format">
<script>
    const input = document.querySelector('#format')
    const picker = this.createDatePicker(input,{
        format: 'dd-MM-yyyy'
    })
</script>

```
:::


##  placement
::: 

```html
<Input width="20vw" id="placement">
<script>
    const input = document.querySelector('#placement')
    const picker = this.createDatePicker(input)
</script>

```
:::


##  offset
::: 
```html
<Input width="20vw" id="offset">
<script>
    const input = document.querySelector('#offset')
    const picker = this.createDatePicker(input,{
           offset: 50,
           placement: 'top'
    })
</script>

```
:::


##  binding
::: Whether to bind the value of the inputElement
```html
<Input width="20vw" id="bind">
<script>
    const input = document.querySelector('#bind')
    const picker = this.createDatePicker(input,{
           binding: false
    })
</script>

```
:::

##  disabledDate
:::
```html
<Input width="20vw" id="disabledDate">
<script>
    const input = document.querySelector('#disabledDate')
    const picker = this.createDatePicker(input,{
           disabledDate(date) {
             return date.getTime() > Date.now();
           },
    })
</script>

```
:::

:::

##  insertTo
::: **Set** the DOM node that the picker insertTo, *body/parent*
```html 
<Input width="20vw" id="insertTo">
<script>
    const input = document.querySelector('#insertTo')
    const picker = this.createDatePicker(input,{
           insertTo: 'parent',
           placement:'top'   
    })
</script>

```
:::


##  Theme
:::
```html
<Input width="20vw" id="Theme">
<script>
    const input = document.querySelector('#Theme')
    const picker = this.createDatePicker(input,{
           themeColor: '#1890ff',
           rangeBgColor: '#e6f7ff',
           tdColor: '#5f5f5f',
           thColor: '#5f5f5f',
           placement:'top'
    })
</script>

```
:::

## Todo  
::: Support *ClassName*、*Style*、*Size*、*unlinkPanels*、*zIndex*、*more format*、*readonly* 
```html

:::
