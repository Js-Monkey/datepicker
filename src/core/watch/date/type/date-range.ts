import {ComponentStatus, DateData, Range, State} from "../../../../types/store"
import {dateDiff, getNext, getPre} from "../../../../utils/date"
import {monthYearLink, updateComponents} from "../util"
import {Sub} from "../../../../types/observer"

function endStartLink(this: State, ey: number, em: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function startEndLink(this: State, ey: number, em: number): void {
  const data = this.end
  ;[data.month, data.year] = getNext(em, ey)
}

export const endComponents: Sub = {
  key: {
    name: 'end',
    childKey: ["year", "month", 'date']
  },
  cb() {
    updateComponents.call(this, ...(arguments as unknown as [number, number, string, DateData]))
    endStartLink.call(this, ...(arguments as unknown as [number, number]))
  },
}

export const endLink: Sub = {
  key: {name: 'end', childKey: ["month"]},
  cb: monthYearLink,
}

export const endLinkStart: Sub = {
  key: {name: 'end', childKey: ['year', 'month']},
  cb: endStartLink,
}

export const startLinkEnd: Sub = {
  key: {name: 'start', childKey: ['year', 'month']},
  cb: startEndLink,
}

export const hoverDay: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb(start: string, end: string) {
    (['start','end'] as ['start','end']).forEach(name=>{
      this[name].components.filter(item => !['pre','next'].includes(item.status)).forEach(item => item.status = dateRangeStatus(start, end, item.date))
    })
  }
}

export function dateRangeStatus(rangeStart: string | null, rangeEnd: string | null, date: string): ComponentStatus {
  const range = [rangeStart, rangeEnd]
  const [min, max] = dateDiff(...range as [string, string]) ? range.reverse() : range
  const isMin = date === min
  const isMax = date === max
  const isInRange = dateDiff(max, date) && dateDiff(date, min)
  if (isInRange) return 'inRange'
  if (isMax && isMin) {
    return 'range-start range-end'
  } else if (isMin) {
    return 'range-start'
  } else if (isMax) {
    return 'range-end'
  } else {
    return ''
  }
}

export const handleSelecting = {
  key: {name: 'range', childKey: ['status']},
  cb(status: string, range: Range) {
    if (status === 'selecting') {
      range.end = null
    }
  },
}
