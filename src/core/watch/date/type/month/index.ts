import {getStatus, updateMonth} from "./public"
import {Sub} from "../../../../../types/observer"
import {otherStatus} from "../day/public";

export const updateStartMonth = {
  key: {name: 'start', childKey: ['year', 'date']},
  cb: updateMonth,
}

export const updateEndMonth = {
  key: {name: 'end', childKey: ['year', 'date']},
  cb: updateMonth,
}


function updateRangeStartYear(ey: number): void {
  this.start.year = ey - 1
}

function updateRangeEndYear(sy: number): void {
  this.end.year = sy + 1
}

export const endLinkStartToYear: Sub = {
  key: {name: 'end', childKey: ['year']},
  cb: updateRangeStartYear,
}


export const startLinkEndToYear: Sub = {
  key: {name: 'start', childKey: ['year']},
  cb: updateRangeEndYear,
}


export const hoverMonth: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._month.forEach(item => item.status = getStatus(this, item.date))
    })
  },
  notImmediate: true
}
