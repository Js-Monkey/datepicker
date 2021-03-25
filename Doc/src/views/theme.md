#  Theme
对于主题自定义，目前提供了三种方案。目前只支持**颜色**的自定义，总共五种颜色，包括：主题`


## SCSS变量

better-datepicker使用**scss**作为选择器的预编译语言，您可以直接拉下库的 <a href="https://github.com/Js-Monkey/better-datepicker/blob/master/src/assets/date-picker.scss" target="_blank">scss代码</a> 做修改
当然，这个需要自行使用*loader*做解析。
```scss
$theme-color: #2ECC71;
$range-color: #eafaf1;
$text-header-color: #858585;
$text-th-color: #969595;
$text-tbody-color: #5f5f5f;
```



## 配置样式

您可以在本页配置好样式后，下载css代码，放入您项目文件中引入即可。


<theme-card></theme-card>


## Options



```js

const input = document.querySelector('#input')
  createDatePicker(input,{
    $theme: '#2a3a4a',
    $range: '#bbbbbb',
    $header: '#5f5f5f',
    $th: '#cccccc',
    $tbody: '#1a2a3a'
  })

```
