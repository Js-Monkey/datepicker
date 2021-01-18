import {DateData, Range, State} from "../../../../types/store"
import {getNext, getPre} from "../../../../utils/date"
import {monthYearLink, updateComponents} from "../util"
import {Sub} from "../../../../types/observer"

function endStartLink(this: State, ey: number, em: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function startEndLink(this: State, ey: number, em: number): void {
  const data = this.end
  console.log(ey, em)
  ;[data.month, data.year] = getNext(em, ey)
}

export const endComponents: Sub = {
  key: {
    name: 'end',
    childKey: ["year", "month", 'date']
  },
  cb() {
    updateComponents(...(arguments as unknown as [number, number, string, DateData]))
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
  cb(start: string, end: string, range: Range) {
    const max = range.end
    const min = range.start
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
