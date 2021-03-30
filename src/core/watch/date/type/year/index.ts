import {getYearStatus} from "./public"
import {Sub} from "../../../../../types/observer"
import {updateYear} from "../public"

const childKey = ['date']

export function watchYear(name = 'start'): Sub {
  return {
    key: {name, childKey},
    cb: updateYear,
  }
}

// export function LinkYear(name: 'start' | 'end' = 'start'): Sub {
//   return {
//     key: {name, childKey: ['year']},
//     cb(year: number): void {
//       if(name==='start'){
//         this.end.year = ++year
//       }else{
//         this.start.year = --year
//       }
//     }
//   }
//
// }

export const hoverYear: Sub = {
  key: {name: 'range', childKey: ['start', 'end']},
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._year.forEach(item => item.status = getYearStatus(this, item.date))
    })
  }
}
