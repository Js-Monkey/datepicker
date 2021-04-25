示例方法

##  clear

::: **清除** 日期和输入框的值
```html
<div>
<Input id="clearInput" />
<b-button @click="clear" style="margin-left:20px" size="mini">clear</b-button>
</div>
<script>
    const input = document.querySelector('#clearInput')
    const picker = this.createDatePicker(input)
    this.clear = ()=> picker.clear()
</script>

```
:::


##  destroyed

::: **销毁**选择器，移除弹出框节点，数据将从内部移除。实例不会被清空，但所有函数都会**不可用** 
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


##  update

::: **更新**选择器的配置，事实上它等于 *destroyed + create*, 之前的弹出框节点会被移除
```html
<div>
<Input id="updateInput" />
<b-button @click="setPlacementLeft" style="margin-left:20px" size="mini">update</b-button>
</div>
<script>
    const input = document.querySelector('#updateInput')
    const picker = this.createDatePicker(input)
    this.setPlacementLeft = ()=> picker.update({placement:'left'})
</script>

```
:::


##  onChange

:::  支持传入一个回调函数， 在选择日期变化后，会触发这个回调
```html
<div>
<Input id="onChangeInput" />
</div>
<script>
    const input = document.querySelector('#onChangeInput')
    const picker = this.createDatePicker(input)
    picker.onChange((date)=>{
        this.$Msg.success('The date is: ' + date)
    })
</script>

```
:::


##  getCurrentDate

::: 获取当前选择的日期，如果不存在则返回**null**
```html
<div>
<Input id="getCurrentDateInput" />
<b-button @click="getDate" style="margin-left:20px" size="mini">get date</b-button>
</div>
<script>
    const input = document.querySelector('#getCurrentDateInput')
    const picker = this.createDatePicker(input,{
          placement: 'top'
    })
    this.getDate = ()=> {
        const date = picker.getCurrentDate()
        this.$Msg.info('The current date is '+ date)
    }
</script>

```
:::

##  open/close

::: **手动触发 open/close** 
需要注意的是，如果在点击事件监听回调函数中使用这两个函数，会触发组件自带的*clickoutside*,导致**不生效**
或可以使用**e.stopPropagation()** 使点击事件不再冒泡到*body上面*
```html
<div>
<Input id="openInput" />
<b-button @click.stop="open" style="margin-left:20px" size="mini">open</b-button>
</div>
<script>
    const input = document.querySelector('#openInput')
    const picker = this.createDatePicker(input,{
        placement: 'top'
    })
    this.open = ()=>picker.open()  
</script>

```
:::
