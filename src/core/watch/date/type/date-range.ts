import {Range, State} from "../../../../types/store"
import {getNext, getPre, rangeSort} from "../../../../utils/date"
import {monthYearLink, otherStatus, updateComponents} from "../public"
import {Sub} from "../../../../types/observer"

function endStartLink(em: number, ey: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function startEndLink(em: number, ey: number): void {
  const data = this.end
  ;[data.month, data.year] = getNext(em, ey)
}

const watchEnd = {
  name: 'end',
  childKey: ["month", "year", 'date']
}

export const endComponents: Sub = {
  key: watchEnd,
  cb: updateComponents
}

export const endLinkToStart: Sub = {
  key: watchEnd,
  cb: endStartLink
}

export const endLink: Sub = {
  key: {name: 'end', childKey: ["month"]},
  cb: monthYearLink,
}

export const endLinkStart: Sub = {
  key: {name: 'end', childKey: ['month', 'year']},
  cb: endStartLink,
}

export const startLinkEnd: Sub = {
  key: {name: 'start', childKey: ['month', 'year']},
  cb: startEndLink,
}

export const hoverDay: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name].components.filter(item => !['pre', 'next'].includes(item.status)).forEach(item => item.status = otherStatus(this, item.date))
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
