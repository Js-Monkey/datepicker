##  TYPE
::: 指定弹出框渲染父节点，有**parent**和**body**选择，默认**body**
```html
<div>
 <span style="cursor:pointer" @click="insertToBody">Body</span>
 <span @click="insertToParent" style="float: right;cursor:pointer">
   parent
 </span>
</div>
<Input width="20vw" id="input">
<script>
    const input = document.querySelector('#input')
    const picker = this.createDatePicker(input,{
         offset: 30,
         type: 'month-range',
         placement: 'bottom',
         format:'yyyy年MM月dd日',
         disabledDate (date) {
            return date > Date.now()
         }
    })
    this.insertToBody = ()=> picker.updateOptions({insertTo:'body',type: 'date-range'})
    this.insertToParent = ()=> picker.updateOptions({insertTo:'parent'})
</script>

```
:::

