import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, monthHasDays} from '../../utils/date'

function content(): Node {
  return createElement({
    class: [dayContent],
    children: Array.from({length: 42}).map((d, index) => {
      const idx = index + 1
      return {
        deps: [
          {
            name: ['startMonth', 'startYear'],
            textCb(month: number, year: number, fd: number, days: number) {
              const {preYear, preMonth} = getPreMonth(month, year)
              const preDays = monthHasDays(preYear, preMonth)
              if (index < fd) return preDays - fd + idx
              else if (index < fd + days) return idx - fd
              else return idx - fd - days
            },
            classCb(month: number, year: number, fd: number, days: number) {
              if (index < fd) return 'pre'
              else if (idx > fd + days) return 'next'
              else return ''
            },
            paramsCb(month: number, year: number) {
              return [monthFirstDay(year, month), monthHasDays(year, month)]
            }
          }
        ],
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
