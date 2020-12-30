import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {nextMonth, nextYear, preMonth, preYear, toggleVisibility, toMonthPage, toYearPage} from './utils'
import {pageName, State} from '../../types/store'
import {getMinInTen} from '../../utils/date'

const type: HeaderType = 'main'

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
      event: toYearPage,
      class: {
        key: ['page'],
        cb: (page: pageName) => (page === 'year' ? 'hidden' : 'show')
      }
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
    main: [preYearSVG, preMonthSVG, yearRange, year, month, nextYearSVG, nextMonthSVG],
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
