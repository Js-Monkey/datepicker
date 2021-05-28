实例方法

##  destroyedAll

::: **销毁所有组件实例**
```html
<div>
    <Input id="destroyedInput" />
    <b-button @click="destroyed" style="margin-left:20px" size="mini">destroyed</b-button>
</div>
<script>
    const input = document.querySelector('#destroyedInput')
    const picker = this.createDatePicker(input)
    this.destroyed = ()=> picker.destroyed()
</script>

```
:::
