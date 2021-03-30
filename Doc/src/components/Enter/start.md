## START
 Import styles, **or you can customize theme colors** [Here](#/doc/theme)
```js
  import  {createDatePicker} from 'better-datepicker'
  import 'better-datepicker/index.css'

```

you can also 

```html
  <div id="wrapper">
     <span>Including children, find the first inputElement</span>
     <input type="text">
  </div>
```
```js
  const input = document.querySelector('#wrapper')
  createDatePicker(input)
```


## OPTIONS
  *createDatePicker* accepts two parameters.
  The first is the **InputElement**, and the second is the **configuration item**. For more details [Here](#/doc/options)
```js
  const input = document.querySelector('#input')
  createDatePicker(input,{
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    format: 'yyyy/MM/dd'
  })
```

## INSTANCE METHODS

```js
  const input = document.querySelector('#input')
  const instance = createDatePicker(input)

  instance.destroyed() //destroyed the datepicker

  instance.update({placement: 'top'}) //Update configuration, destroyed old datepicker

  instance.onChange((date)=>{
    console.log('The current date is ' + date)
  })

  instance.getCurrentDate()

  //more
```

## METHODS

TODO

## DOCUMENT TODOLIST

| TODO     | VERSION   |
| ----------------- | -------------------------------- |
| Support Mobile  |    0.3     |
| Show All Demo  |  0.4    |
| Support online debugging  (codeSandBox)  |  0.5    |
| -  |  -   |
