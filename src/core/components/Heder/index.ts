import {HeaderType} from '../../../types/components'
import {createElement} from '../../../utils/element'
import {header, defaultCursor} from '../../../utils/classes'
import {nextMonth, nextYear, preMonth, preYear, toggleVisibility, toMonthPage, toYearPage} from '../utils'
import {pageName, State} from '../../../types/store'
import {getMinInTen} from '../../../utils/date'
import {CreateElementOptions} from '../../../types/utils'
import {Bind} from "../../../utils/helper";

let type: HeaderType = 'start'

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
        key: {
          name: 'start',
          childKey: ['year', 'components']
        },
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
  return createElement({
    name: 'span',
    style: {
      padding: '0 4px'
    },
    text: {
      key: {
        name: type,
        childKey: ['year', 'components']
      },
      cb: year => year + '年'
    },
    event: toYearPage,
    class: {
      key: ['page'],
      cb: (page: pageName) => (page === 'year' ? 'hidden' : 'show')
    }
  }, state)
}

function month(state: State) {
  return createElement({
    name: 'span',
    text: {
      key: {
        name: type,
        childKey: ['month']
      },
      cb: month => month + '月'
    },
    style: {
      padding: '0 4px'
    },
    event: toMonthPage,
    class: {
      key: ['page'],
      cb: toggleVisibility
    }
  }, state)
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
    event: Bind(nextYear, type)
  }
  return createElement(opt, state)
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
      event: Bind(nextMonth, type),
      class: {
        key: ['page'],
        cb: toggleVisibility
      }
    },
    state
  )
}

const headerChildren = {
  start: [preYearSVG, preMonthSVG, year, month],
  main: [preYearSVG, preMonthSVG, yearRange, year, month, nextYearSVG, nextMonthSVG],
  end: [year, month, nextYearSVG, nextMonthSVG]
}

export function Header(state: State, t?: HeaderType): Node {
  const opt = {
    class: [header],
    children: headerChildren[t || 'main']
  }
  type = t || 'start'
  return createElement(opt, state)
}

export function HeaderLeft(state: State): Node {
  return Header(state, 'start')
}

export function HeaderRight(state: State): Node {
  return Header(state, 'end')
}
