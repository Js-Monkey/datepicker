import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, monthHasDays} from '../../utils/date'

function content(): Node {
  return createElement({
    class: [dayContent],
    children: Array.from({length: 42}).map((d, index) => {
      return {
        text: {
          deps: ['startMonth', 'startYear'],
          output: (month: number, year: number) => {
            const fd = monthFirstDay(year, month)
            const days = monthHasDays(year, month)
            const {preYear, preMonth} = getPreMonth(month, year)
            const preDays = monthHasDays(preYear, preMonth)
            const idx = index + 1
            if (index < fd) {
              return preDays - fd + idx
            } else if (index < fd + days) {
              return idx - fd
            } else {
              return idx - fd - days
            }
          }
        },
        name: 'span'
      }
    })
  })
}

function bar(): Node {
  return createElement({
    class: [dayBar],
    children: dayBarNames.map(name => {
      return {text: name, name: 'span'}
    })
  })
}

export function Day(): Node {
  return createElement({
    class: [day],
    children: [bar, content]
  })
}

// index、第一天是星期几、上个月的总天数、这个月的总天数
// 0、4、30、31
