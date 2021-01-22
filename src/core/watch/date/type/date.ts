import {monthYearLink, updateComponents} from "../public"
import {getYearAndMonth} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"

export const startLink = {
  key: {name: 'start', childKey: ['month']},
  cb: monthYearLink
}

export const dateLink: Sub = {
  key: {name: 'start', childKey: ['date']},
  cb(date: string) {
    if (!date) return
    const {start} = this
    ;[start.year, start.month] = getYearAndMonth(date)
  },
  notImmediate: true
}

export const startComponents = {
  key: {name: 'start', childKey: ['month', 'year', 'date']},
  cb: updateComponents,
}
