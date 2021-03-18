import {getStatus, updateMonth} from "./public"
import {Sub} from "../../../../../types/observer"

export const updateStartMonth = {
  key: {name: 'start', childKey: ['year', 'date']},
  cb: updateMonth,
}

export const updateEndMonth = {
  key: {name: 'end', childKey: ['year', 'date']},
  cb: updateMonth,
}

export const endLinkStartToYear: Sub = {
  key: {name: 'end', childKey: ['year']},
  cb(ey: number): void {
    this.start.year = --ey
  }
  ,
}

export const startLinkEndToYear: Sub = {
  key: {name: 'start', childKey: ['year']},
  cb(sy: number): void {
    this.end.year = ++sy
  },
}


export const hoverMonth: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._month.forEach(item => item.status = getStatus(this, item.date))
    })
  }
}
