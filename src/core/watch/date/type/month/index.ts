import {getStatus} from "./public"
import {Sub} from "../../../../../types/observer"
import {updateMonth} from "../public"

const childKey = ['year', 'date']

export function watchMonth(name = 'start'): Sub {
  return {
    key: {name, childKey},
    cb: updateMonth,
  }
}

export function LinkYear(name: 'start' | 'end' = 'start'): Sub {
  return {
    key: {name, childKey: ['year']},
    cb(year: number): void {
      if(name==='start'){
        this.end.year = ++year
      }else{
        this.start.year = --year
      }
    }
  }

}

export const hoverMonth: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._month.forEach(item => item.status = getStatus(this, item.date))
    })
  }
}
