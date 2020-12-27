import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {nextMonth, nextYear, preMonth, preYear, toMonthPage, toYearPage} from './utils'
import {pageName, State} from '../../types/store'

function year(state: State) {
  return createElement(
    {
      name: 'span',
      style: {
        padding: '0 4px'
      },
      text: {
        name: ['startYear'],
        cb: year => year + '年'
      },
      event: toYearPage
    },
    state
  )
}

function month(state: State) {
  const opt: CreateElementOptions = {
    name: 'span',
    text: {
      name: ['startMonth'],
      cb: month => month + '月'
    },
    style: {
      padding: '0 4px'
    },
    class: {
      name: ['page'],
      cb: (page: pageName) => (page === 'day' ? 'show' : 'hidden')
    },
    event: toMonthPage
  }
  return createElement(opt, state)
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
      event: preMonth
      // deps: [
      //   {
      //     name: ['page'],
      //     classCb: monthClassCb
      //   }
      // ]
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
      event: nextMonth
      // deps: [
      //   {
      //     name: ['page'],
      //     classCb: monthClassCb
      //   }
      // ]
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
