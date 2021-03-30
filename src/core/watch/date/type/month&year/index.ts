import {getStatus} from "./public"
import {Sub} from "../../../../../types/observer"
import {updateMonth, updateYear} from "../public"

const key = (name: string) => {
  return {name, childKey: ['year', 'date']}
}
const rangeKey = {name: 'range', childKey: ['start', 'end']}

export function monthOrYear(type = true, name = 'start'): Sub {
  return {
    key: key(name),
    cb: type ? updateMonth : updateYear,
  }
}


export function LinkYear(name: 'start' | 'end' = 'start'): Sub {
  return {
    key: {name, childKey: ['year']},
    cb(year: number): void {
      if (name === 'start') {
        this.end.year = ++year
      } else {
        this.start.year = --year
      }
    }
  }

}

export const hoverMonth: Sub = {
  key: rangeKey,
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._month.forEach(item => item.status = getStatus(this, item.date))
    })
  }
}

export const hoverYear: Sub = {
  key: rangeKey,
  cb() {
    (['start', 'end'] as ['start', 'end']).forEach(name => {
      this[name]._year.forEach(item => item.status = getStatus(this, item.date, 'year'))
    })
  }
}
