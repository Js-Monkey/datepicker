import {updateDays} from "./public"

export const startDays = {
  key: {name: 'start', childKey: ['month', 'year', 'date']},
  cb: updateDays,
}
