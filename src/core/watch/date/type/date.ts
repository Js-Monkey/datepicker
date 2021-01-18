import {monthYearLink, updateComponents} from "../util"
import {ComponentStatus} from "../../../../types/store"


export function dateStatus(startDate: string, date: string): ComponentStatus {
  return startDate === date ? 'selected' : ''
}

export const startLink = {
  key: {name: 'start', childKey: ['month']},
  cb: monthYearLink
}

export const startComponents = {
  key: {name: 'start', childKey: ['year', 'month', 'date']},
  cb: updateComponents,
}
