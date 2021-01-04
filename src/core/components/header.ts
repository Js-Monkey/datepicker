import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header, defaultCursor} from '../../utils/classes'
import {nextMonth, nextYear, preMonth, preYear, toggleVisibility, toMonthPage, toYearPage} from './utils'
import {pageName, State} from '../../types/store'
import {getMinInTen} from '../../utils/date'
import {CreateElementOptions, updateOptions} from '../../types/utils'
import {Sub} from '../../types/observer'

let type: HeaderType = 'main'

function yearRange(state: State) {
  const range = (year: number) => {
    const min = getMinInTen(year)
    const max = min + 9
    return min + '年' + ' - ' + max + '年'
  }
  return createElement(
    {
      name: 'span',
      style: {
        padding: '0 4px'
      },
      text: {
        key: ['startYear', 'startDayComponent'],
        cb: (year: number) => range(year)
      },
      class: {
        key: ['page'],
        cb: (page: pageName) => (page === 'year' ? 'show' : 'hidden')
      },
      event: toYearPage
    },
    state
  )
}

function year(state: State) {
  const opt: CreateElementOptions = {
    name: 'span',
    style: {
      padding: '0 4px'
    },
    text: {
      key: ['startYear', 'startDayComponent'],
      cb: year => year + '年'
    },
    class: {
      key: ['page'],
      cb: (page: pageName) => (page === 'year' ? 'hidden' : 'show')
    }
  }
  if (type === 'right') (opt.text as Sub).key = ['endYear', 'endDayComponent']
  if (type === 'main') opt.event = toYearPage
  else (opt.class as updateOptions).static = [defaultCursor]
  return createElement(opt, state)
}

function month(state: State) {
  const opt: CreateElementOptions = {
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
    }
  }
  if (type === 'right') (opt.text as Sub).key = ['endMonth']
  if (type === 'main') opt.event = toMonthPage
  else (opt.class as updateOptions).static = [defaultCursor]
  return createElement(opt, state)
}

function preYearSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'pre-year',
      style: {
        position: 'absolute',
        left: '30px'
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
        position: 'absolute',
        left: '50px'
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
  const opt: CreateElementOptions = {
    name: 'svg',
    text: 'next-year',
    style: {
      position: 'absolute',
      right: '30px'
    },
    event: nextYear
  }
  return createElement(opt, state, type)
}

function nextMonthSVG(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'next-month',
      style: {
        position: 'absolute',
        right: '50px'
      },
      event: nextMonth,
      class: {
        key: ['page'],
        cb: toggleVisibility
      }
    },
    state,
    type
  )
}

const headerChildren = {
  left: [preYearSVG, preMonthSVG, year, month],
  main: [preYearSVG, preMonthSVG, yearRange, year, month, nextYearSVG, nextMonthSVG],
  right: [year, month, nextYearSVG, nextMonthSVG]
}

export function Header(state: State, t: HeaderType = 'main'): Node {
  type = t
  return createElement(
    {
      class: [header],
      children: headerChildren[type]
    },
    state
  )
}

export function HeaderLeft(state: State): Node {
  return Header(state, 'left')
}

export function HeaderRight(state: State): Node {
  return Header(state, 'right')
}
