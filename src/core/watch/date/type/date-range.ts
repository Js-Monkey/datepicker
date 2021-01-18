import {DateData, Range, State} from "../../../../types/store"
import {dateDiff, getNext, getPre} from "../../../../utils/date"
import {monthYearLink, updateComponents} from "../util"
import {Sub} from "../../../../types/observer"

function endStartLink(this: State, em: number, ey: number): void {
  const data = this.start
  ;[data.year, data.month] = getPre(ey, em)
}

function startEndLink(this: State, em: number, ey: number): void {
  const data = this.end
  ;[data.year, data.month] = getNext(ey, em)
}

export const endComponents: Sub = {
  key: {
    name: 'end',
    childKey: ["month", "year", 'date']
  },
  cb() {
    updateComponents(...(arguments as unknown as [number, number, string, DateData]))
    endStartLink.call(this, ...(arguments as unknown as [number, number]))
  },
}

export const endLink = {
  key: {name: 'end', childKey: ["month"]},
  cb: monthYearLink,
}

export const endLinkStart = {
  key: {name: 'end', childKey: ['month', 'year']},
  cb: endStartLink,
}

export const startLinkEnd = {
  key: {name: 'start', childKey: ['month', 'year']},
  cb: startEndLink,
}

export const hoverDay: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb(start: string, end: string, range: Range) {

    let max = range.end
    let min = range.start
    if (dateDiff(start, end)) {
      min = end
      max = start
    }
    // this.end.components.filter(item => item.date).forEach(item => {
    //   if (dateDiff(max, item.date) && dateDiff(item.date, min)) {
    //     item.status = 'inRange'
    //   } else if (item.date === min) {
    //     item.status = 'range-start'
    //   } else if (item.date === max) {
    //     item.status = 'range-end'
    //   } else {
    //     item.status = ''
    //   }
    // })
  }
}

export const rangeStatus = {
  key: {name: 'range', childKey: ['status']},
  cb(status: string, range: Range) {
    if (status === 'selecting') {
      range.end = null
    }
  },
}
