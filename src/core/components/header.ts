import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {nextMonth, nextYear, preMonth, preYear, toggleVisibility, toMonthPage, toYearPage} from './utils'
import {State} from '../../types/store'

function year(state: State) {
  return createElement(
    {
      name: 'span',
      style: {
        padding: '0 4px'
      },
      text: {
        key: ['startYear', 'startDayComponent'],
        cb: year => year + '年'
      },
      event: toYearPage
    },
    state
  )
}

function month(state: State) {
  return createElement(
    {
      name: 'span',
      text: {
        key: ['startMonth'],
        cb: month => month + '月'
      },
      style: {
        padding: '0 4px'
      },
      class: {
        key: ['page'],
        cb: toggleVisibility
      },
      event: toMonthPage
    },
    state
  )
}

function preYearSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'pre-year',
      style: {
        float: 'left',
        'margin-left': '10px'
      },
      event: preYear
    },
    state
  )
}

function preMonthSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'pre-month',
      style: {
        float: 'left',
        'margin-left': '10px'
      },
      event: preMonth,
      class: {
        key: ['page'],
        cb: toggleVisibility
      }
    },
    state
  )
}

function nextYearSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'next-year',
      style: {
        float: 'right',
        'margin-right': '10px'
      },
      event: nextYear
    },
    state
  )
}

function nextMonthSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'next-month',
      style: {
        float: 'right',
        'margin-right': '5px'
      },
      event: nextMonth,
      class: {
        key: ['page'],
        cb: toggleVisibility
      }
    },
    state
  )
}

function headerChildren(type: HeaderType) {
  // function bind(cb: () => any) {
  //   return cb.bind(null, state)
  // }

  return {
    left: [preYearSVG, preMonthSVG, year, month],
    main: [preYearSVG, preMonthSVG, year, month, nextYearSVG, nextMonthSVG],
    right: [year, month, nextYearSVG, nextMonthSVG]
  }
}

export function Header(state: State, type: HeaderType = 'main'): Node {
  return createElement(
    {
      class: [header],
      children: headerChildren(type)[type]
    },
    state
  )
}
