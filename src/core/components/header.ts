import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {monthClassCb, nextMonth, nextYear, preMonth, preYear, toMonthPage, toYearPage} from './utils'

function year() {
  const opt: CreateElementOptions = {
    name: 'span',
    style: {
      padding: '0 4px'
    },
    deps: [
      {
        name: ['startYear'],
        textCb: val => val + '年'
      }
    ],
    event: toYearPage
  }
  //if (!type) opt.event = '' todo
  return createElement(opt)
}

function month() {
  const opt: CreateElementOptions = {
    name: 'span',
    deps: [
      {
        name: ['startMonth'],
        textCb: month => month + '月'
      },
      {
        name: ['page'],
        classCb: monthClassCb
      }
    ],
    style: {
      padding: '0 4px'
    },
    event: toMonthPage
  }
  //if (!type) opt.event = '' todo
  return createElement(opt)
}

function preYearSVG() {
  return createElement({
    name: 'svg',
    text: 'pre-year',
    style: {
      float: 'left',
      'margin-left': '10px'
    },
    event: preYear
  })
}

function preMonthSVG() {
  return createElement({
    name: 'svg',
    text: 'pre-month',
    style: {
      float: 'left',
      'margin-left': '10px'
    },
    event: preMonth,
    deps: [
      {
        name: ['page'],
        classCb: monthClassCb
      }
    ]
  })
}

function nextYearSVG() {
  return createElement({
    name: 'svg',
    text: 'next-year',
    style: {
      float: 'right',
      'margin-right': '10px'
    },
    event: nextYear
  })
}

function nextMonthSVG() {
  return createElement({
    name: 'svg',
    text: 'next-month',
    style: {
      float: 'right',
      'margin-right': '5px'
    },
    event: nextMonth,
    deps: [
      {
        name: ['page'],
        classCb: monthClassCb
      }
    ]
  })
}

function headerChildren(type: HeaderType) {
  function bind(cb: () => any) {
    return cb.bind(null, type)
  }

  return {
    left: [preYearSVG, preMonthSVG, bind(year), bind(month)],
    main: [preYearSVG, preMonthSVG, year, month, nextYearSVG, nextMonthSVG],
    right: [bind(month), bind(month), nextYearSVG, nextMonthSVG]
  }
}

export function Header(type: HeaderType = 'main'): Node {
  return createElement({
    class: [header],
    children: headerChildren(type)[type]
  })
}
