## START
::: Import styles, **or you can customize theme colors** [here](#/doc)
```html
<script>
    import  {createDatePicker} from 'better-datepicker'

    import 'better-datepicker/style/index.css'

    createDatePicker({
        type: 'date-range',
        fortmat: 'YYYY-MM-dd'
    })

</script>

```
:::


##  TYPES
::: Import styles, **you can customize theme colors** [here](#/doc)
```html
<input id="input" type="text">
<script>
    import  {createDatePicker} from 'better-datepicker'

    import 'better-datepicker/style/index.css'
    const input = document.querySelector('#input')
    this.createDatePicker(input)

</script>

```
:::

