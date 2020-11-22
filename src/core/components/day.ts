import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, daysInAMonth} from '../../utils/date'
import {pageName} from '../../types/store'

function content(): Node {
  return createElement({
    class: [dayContent],
    children: Array.from({length: 42}).map((d, index) => {
      const idx = index + 1
      return {
        // deps: [
        //   {
        //     name: ['startMonth', 'startYear'],
        //     textCb(month: number, year: number, fd: number, days: number) {
        //       const {preYear, preMonth} = getPreMonth(month, year)
        //       const preDays = daysInAMonth(preYear, preMonth)
        //       return index < fd ? preDays - fd + idx : index < fd + days ? idx - fd : idx - fd - days
        //     },
        //     classCb(month: number, year: number, fd: number, days: number) {
        //       return index < fd ? 'pre' : idx > fd + days ? 'next' : ''
        //     },
        //     paramsCb(month: number, year: number) {
        //       return [monthFirstDay(year, month), daysInAMonth(year, month)]
        //     }
        //   }
        // ],
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
    // deps: [
    //   {
    //     name: ['page'],
    //     classCb(page: pageName) {
    //       return page === 'day' ? 'show' : 'hidden'
    //     }
    //   }
    // ]
  })
}
