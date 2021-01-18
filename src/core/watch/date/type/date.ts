import {monthYearLink, updateComponents} from "../util"

export const startLink = {
  key: {name: 'start', childKey: ['month']},
  cb: monthYearLink
}

export const startComponents = {
  key: {name: 'start', childKey: ['year', 'month', 'date']},
  cb: updateComponents,
}
