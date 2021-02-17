import {Range, State} from "../../../../../types/store"
import {getNext, getPre, rangeSort} from "../../../../../utils/date"
import {monthYearLink, otherStatus, updateDays} from "./public"
import {Sub} from "../../../../../types/observer"

function updateRangeStartMonth(em: number, ey: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function updateRangeEndMonth(em: number, ey: number): void {
  const data = this.end
  ;[data.month, data.year] = getNext(em, ey)
}

const watchEnd = {
  name: 'end',
  childKey: ["month", "year", 'date']
}

export const updateDayDom: Sub = {
  key: watchEnd,
  cb: updateDays
}

export const rangeLinkPrecisionToDay: Sub = {
  key: watchEnd,
  cb: updateRangeStartMonth
}

export const endLink: Sub = {
  key: {name: 'end', childKey: ["month"]},
  cb: monthYearLink,
}

export const endLinkStart: Sub = {
  key: {name: 'end', childKey: ['month', 'year']},
  cb: updateRangeStartMonth,
}

export const startLinkEnd: Sub = {
  key: {name: 'start', childKey: ['month', 'year']},
  cb: updateRangeEndMonth,
}

export const hoverDay: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._day.filter(item => !['pre', 'next'].includes(item.status)).forEach(item => item.status = otherStatus(this, item.date))
    })
  },
  notImmediate: true
}

export const handleSelecting: Sub = {
  key: {name: 'range', childKey: ['status']},
  cb(status: string, range: Range) {
    if (status === 'selecting') {
      range.end = null
    } else {
      finishSelect(this)
    }
  },
}

function finishSelect(self: State) {
  self.visible = false
  const {start, end} = self.range
  ;[self.start.date, self.end.date] = rangeSort(start, end)
}
