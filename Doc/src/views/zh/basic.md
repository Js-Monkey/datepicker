Datepicker options 基础配置

## format

::: 输入框值**格式**， 如果设置带有*ww/w*，当前日期会改为**当周第一天**绑定到输入框

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

## placement

::: 弹出框的**位置**

```html
<Input width="20vw" id="placement">
<script>
    const input = document.querySelector('#placement')
    const picker = this.createDatePicker(input)
</script>

```

:::

## offset

::: 弹出框距离输入框的距离

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

## binding

::: 是否**绑定**到输入框的值

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

## disabledDate

::: **禁用**的日期

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

## insertTo

:::  设置弹出框的父节点，当前只接受 *body/parent*, 后续版本会增加接受一个**dom节点**

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

## Theme

::: **配置**主题

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
