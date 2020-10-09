import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {set, get} from '../../store'

export function nextYear(): void {
  let newVal = get('startYear')
  set('startYear', ++newVal)
}

export function preYear(): void {
  let newVal = get('startYear')
  set('startYear', --newVal)
}

export function nextMonth(): void {
  let newVal = get('startMonth')
  if (++newVal === 13) {
    newVal = 1
    nextYear()
  }
  set('startMonth', newVal)
}

export function preMonth(): void {
  let newVal = get('startMonth')
  if (--newVal === 0) {
    newVal = 12
    preYear()
  }
  set('startMonth', newVal)
}

function year() {
  const opt: CreateElementOptions = {
    name: 'span',
    text: {
      dep: 'startYear',
      output: val => val + '年'
    },
    style: {
      padding: '0 4px'
    }
  }
  //if (!type) opt.event = '' todo
  return createElement(opt)
}

function month() {
  const opt: CreateElementOptions = {
    name: 'span',
    text: {
      dep: 'startMonth',
      output: val => val + '月'
    },
    style: {
      padding: '0 4px'
    }
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
