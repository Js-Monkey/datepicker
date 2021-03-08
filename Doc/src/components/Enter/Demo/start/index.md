## START
::: Import styles, **or you can customize theme colors** [here](#/doc)
```html
<script>
    import  {createDatePicker} from 'better-datepicker'

    import 'better-datepicker/style/index.css'

    createDatePicker(document.querySelector('#input'),{
        type: 'date-range',
        fortmat: 'YYYY-MM-dd'
    })

</script>

```
:::


##  insertTo
::: DatePicker pop up on body
```html
<input id="input" type="text">
<script>
    import  {createDatePicker} from 'better-datepicker'

    import 'better-datepicker/style/index.css'
    const input = document.querySelector('#input')
    this.createDatePicker(input,{

        offset: 30
    })

</script>

```
:::

