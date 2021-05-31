# Locale 地区设置

安装包提供一部分地区静态配置文件

```js
  import {locale} from "better-datepicker"
  import zhCn from 'better-datepicker/dist/locale_es/zh-cn'    // es
  //require('better-datepicker/dist/locale_umd/zh-cn') // cjs
  locale(zhCn)
```

如果安装包没有提供的地区文件，可以自定义

```js
  const localeConfig = {
     name: "en",
     weekStart: 0,
     yearStart: 1,
     weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
     months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
     yearFormat: "yyyy",
     weekFormat: 'yyyy-ww'
  }
  locale(en)
```

| 地区/语言   | 缩写/链接 | 
| ----------------- | -------------------------------- | 
| 阿富汗         |    [af](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/af.ts)     | 
| 巴西              |    [br](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/br.ts)  |  
| 英语              |    [en](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/en.ts)    | 
| 澳大利亚             |    [en-au](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/en-au.ts)   |
| 加拿大             |    [en-au](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/en-ca.ts)   |
| 英国             |    [en-gb](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/en-gb.ts)   |
| 爱尔兰             |    [en-ie](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/en-ie.ts)   |
| 西班牙              |  [es](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/es.ts)   |  
| 芬兰             |   [fi](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/fi.ts)  | 
| 法罗群岛              |   [fo](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/fo.ts)   |  
| 法国              |    [fr](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/fr.ts)    |  
| 克罗地亚               |    [hr](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/hr.ts)    |   
| 海地              |      [ht](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/ht.ts)   | 
| 意大利  |     [it](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/it.ts)   |  
| 日本  |     [ja](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/ja.ts)   | 
| 韩国  |     [ko](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/ko.ts)   | 
| 科威特  |     [ku](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/ku.ts)   | 
| 黎巴嫩  |     [lb](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/lb.ts)   | 
| 老挝  |     [lo](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/lo.ts)   | 
| 乌克兰  |     [uk](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/uk.ts)   | 
| 乌兹别克斯坦  |     [uz](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/uz.ts)   | 
| 中文  |     [zh](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/zh.ts)  | 
| 简体中文  |     [zh-cn](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/zh-cn.ts)   | 
| 中国香港 |    [zh-hk](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/zh-hk.ts)   | 
| 中国台湾 |    [zh-tw](https://github.com/Js-Monkey/better-datepicker/blob/master/locale/zh-tw.ts)   | 

<br />  
