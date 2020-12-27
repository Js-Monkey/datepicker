import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, daysInAMonth} from '../../utils/date'
import {State} from '../../types/store'
import {toggleVisibility} from './utils'

function content(state: State): Node {
  const handleParams = (month: number, year: number) => [monthFirstDay(year, month), daysInAMonth(year, month)]
  return createElement(
    {
      class: [dayContent],
      children: Array.from({length: 42}).map((d, index) => {
        const idx = index + 1
        return {
          text: {
            key: ['startMonth', 'startYear'],
            cb(month: number, year: number, fd: number, days: number) {
              const {preYear, preMonth} = getPreMonth(month, year)
              const preDays = daysInAMonth(preYear, preMonth)
              return index < fd ? preDays - fd + idx : index < fd + days ? idx - fd : idx - fd - days
            },
            handleParams
          },
          class: {
            key: ['startMonth', 'startYear'],
            cb(month: number, year: number, fd: number, days: number) {
              return index < fd ? 'pre' : idx > fd + days ? 'next' : ''
            },
            handleParams
          },
          name: 'span'
        }
      })
    },
    state
  )
}

function bar(state: State): Node {
  return createElement(
    {
      class: [dayBar],
      children: dayBarNames.map(name => {
        return {text: name, name: 'span'}
      })
    },
    state
  )
}

export function Day(state: State): Node {
  return createElement(
    {
      children: [bar, content],
      class: {
        key: ['page'],
        cb: toggleVisibility,
        static: [day]
      }
    },
    state
  )
}
