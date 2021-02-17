import {HeaderType} from '../../../types/components'
import {createElement} from '../../../utils/element'
import {header, defaultCursor} from '../../../utils/classes'
import {nextMonth, nextYear, preMonth, preYear, toggleVisibility, toMonthPage, toYearPage} from '../utils'
import {pageName, State} from '../../../types/store'
import {getMinInTen} from '../../../utils/date'
import {CreateElementOptions} from '../../../types/utils'
import {Bind} from "../../../utils/bind"
import {Sub} from "../../../types/observer";

let type: HeaderType = 'start'

const togglePage = {
  key: ['page'],
  cb: toggleVisibility
}

function yearRange(state: State) {
  const range = (year: number) => {
    const min = getMinInTen(year)
    const max = min + 9
    return min + '年' + ' - ' + max + '年'
  }
  return createElement(
    {
      name: 'span',
      text: {
        key: {
          name: 'start',
          childKey: ['year', '_day']
        },
        cb: (year: number) => range(year)
      },
      visible: {
        key: ['page'],
        cb: (page: pageName) => page === 'year'
      },
      event: toYearPage
    },
    state
  )
}

function year(state: State) {
  return createElement({
    name: 'span',
    text: {
      key: {
        name: type,
        childKey: ['year', '_day']
      },
      cb: year => year + '年'
    },
    event: toYearPage,
    visible: {
      key: ['page'],
      cb: (page: pageName) => page !== 'year'
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
    event: toMonthPage,
    visible: togglePage
  }, state)
}

function date(state: State) {
  const showMonth: Sub<string> = {
    key: {
      name: type,
      childKey: ['year']
    },
    cb: (year) => year + '年 '
  }

  const showDate: Sub<string> = {
    key: {
      name: type,
      childKey: ['month', 'year']
    },
    cb: (month, year) => year + '年 ' + month + '月'
  }
  const isMonth = state.options.type.indexOf('month') > -1
  return createElement({
    name: 'span',
    text: isMonth ? showMonth : showDate,
    class: [defaultCursor]
  }, state)
}

function preYearIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'year',
      style: {
        position: 'absolute',
        left: '30px',
        width: '14px',
        height: '14px',
      },
      event: preYear
    },
    state
  )
}

function preMonthIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'month',
      style: {
        position: 'absolute',
        left: '50px',
        width: '14px',
        height: '14px',
      },
      event: preMonth,
      visible: togglePage
    },
    state
  )
}

function nextYearIcon(state: State) {
  const opt: CreateElementOptions = {
    name: 'svg',
    text: 'year',
    style: {
      position: 'absolute',
      right: '30px',
      transform: 'rotate(180deg)',
      width: '14px',
      height: '14px',
    },
    event: Bind(nextYear, type)
  }
  return createElement(opt, state)
}

function nextMonthIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'month',
      style: {
        position: 'absolute',
        right: '50px',
        transform: 'rotate(180deg)',
        width: '14px',
        height: '14px',
      },
      event: Bind(nextMonth, type),
      visible: togglePage
    },
    state
  )
}

const headerChildren = {
  start: [preYearIcon, preMonthIcon, date],
  main: [preYearIcon, preMonthIcon, yearRange, year, month, nextYearIcon, nextMonthIcon],
  end: [date, nextYearIcon, nextMonthIcon]
}

export function Header(state: State, t?: HeaderType): Node {
  const opt = {
    class: [header],
    children: headerChildren[t || 'main'],
    style: {
      width: '298px',
      'text-align': 'center'
    }
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
