import {getNext, getPre} from "../../../../../utils/date"
import {updateDays} from "./public"
import {getStatus} from "../month&year/public"
import {Sub} from "../../../../../types/observer"
import {not} from "../../../../../utils/has"
import {ReverseMap} from "../../../../../types/watch"

const childKey = ['month', 'year', 'date']

export const updateDayDom: Sub = {
  key: {
    name: 'end',
    childKey: ["month", "year", 'date']
  },
  cb: updateDays
}

export function linkMonth(name: 'start' | 'end' = 'start'): Sub {
  const reverse: ReverseMap = {
    start: 'end',
    end: 'start'
  }
  return {
    key: {name, childKey},
    cb(em: number, ey: number): void {
      const data = this[reverse[name]]
      const method = name === 'start' ? getNext : getPre
      ;[data.month, data.year] = method(em, ey)
    }
  }

}

export const hoverDay: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb(start, end) {
    if (!start && !end) return
    (['start', 'end'] as ['start', 'end']).forEach((name,idx) => {
      this[name]._day.filter(item => not(item.status, ['pre', 'next'])).forEach(item => {
        item.status = getStatus(this, item.date,idx,'date')
      })
    })
  }
}
