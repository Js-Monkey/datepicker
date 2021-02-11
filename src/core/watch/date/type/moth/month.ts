import {updateMonth} from "./public"

export const startMonth = {
  key: {name: 'start', childKey: ['year', 'date']},
  cb: updateMonth,
}
