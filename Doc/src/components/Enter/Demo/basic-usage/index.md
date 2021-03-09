##  insertTo
::: 指定弹出框渲染父节点，有**parent**和**body**选择，默认**body**
```html
<Input id="input">
<script>
    import  {createDatePicker} from 'better-datepicker'

    import 'better-datepicker/style/index.css'
    const input = document.querySelector('#input')
    this.createDatePicker(input,{
        insertTo: 'parent',
        offset: 30,
        placement: 'bottom'
    })

</script>

```
:::

