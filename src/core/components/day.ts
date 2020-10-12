import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, monthHasDays} from '../../utils/date'

function content(): Node {
  return createElement({
    class: [dayContent],
    children: Array.from({length: 42}).map((d, idx) => {
      return {
        text: {
          deps: ['startMonth', 'startYear'],
          output: (month: number, year: number) => {
            const fd = monthFirstDay(year, month)
            const {preMonth, preYear} = getPreMonth(month, year)
            if (idx < fd) {
              return monthHasDays(preMonth, preYear) - fd + idx + ''
            }
            return '12'
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
