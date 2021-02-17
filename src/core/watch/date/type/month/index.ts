import {updateMonth} from "./public"
import {getNext, getPre} from "../../../../../utils/date";

export const startMonth = {
  key: {name: 'start', childKey: ['year', 'date']},
  cb: updateMonth,
}


function updateRangeStartMonth(em: number, ey: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function updateRangeEndMonth(em: number, ey: number): void {
  const data = this.end
  ;[data.month, data.year] = getNext(em, ey)
}
