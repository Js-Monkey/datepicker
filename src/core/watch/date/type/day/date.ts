import {monthYearLink, updateDays} from "./public"

export const startLink = {
  key: {name: 'start', childKey: ['month']},
  cb: monthYearLink
}

export const startDays = {
  key: {name: 'start', childKey: ['month', 'year', 'date']},
  cb: updateDays,
}
