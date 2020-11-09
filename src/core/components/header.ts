import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {set, get} from '../../store'
import {getNextMonth, getPreMonth} from '../../utils/date'

export function nextYear(): void {
  let newVal = get('startYear')
  set('startYear', ++newVal)
}

export function preYear(): void {
  let newVal = get('startYear')
  set('startYear', --newVal)
}

export function nextMonth(): void {
  const m = get('startMonth')
  set('startMonth', getNextMonth(m, undefined, nextYear))
}

export function preMonth(): void {
  const m = get('startMonth')
  set('startMonth', getPreMonth(m, undefined, preYear))
}

export function toMonthPage(): void {
  set('page', 2)
}

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
    ]
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
    event: preMonth
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
    event: nextMonth
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
