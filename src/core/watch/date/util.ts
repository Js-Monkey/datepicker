import {ComponentStatus, DateData, State} from "../../../types/store"
import {daysInAMonth, getNext, getPre, joinDate, monthFirstDay} from "../../../utils/date"
import {dateRangeStatus} from "./type/date-range"
import {dateStatus} from "./type/date"

export function updateComponents(
  this: State,
  month: number,
  year: number,
  date: string,
  state: DateData
): void {
  const [preMonth, preYear] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state.components.forEach((item, index) => {
      const idx = index + 1
      const currentIdx = idx - fd
      let status: ComponentStatus = index < fd ? 'pre' : fd + days <= index ? 'next' : 'other'
      const newDate = {
          pre() {
            const day = preDays + currentIdx
            return [String(day), joinDate(...getPre(month, year), day)]
          },
          next() {
            const day = currentIdx - days
            return [String(day), joinDate(...getNext(month, year), day)]
          },
          other: () => {
            const date = joinDate(year, month, currentIdx)
            status = otherStatus(this, date)
            return [String(currentIdx), date]
          }
        }
      ;[item.text, item.date] = newDate[status]()
      item.status = status
    console.log(this)
    }
  )
}

function isToday(self: State, date: string) {
  return Date.parse(self.today) === Date.parse(date)
}

export function otherStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    date: () => dateStatus(self.start.date, date),
    'date-range'() {
      const {start, end} = self.range
      return dateRangeStatus(start, end, date)
    }
  }
  let newStatus = typeStatus[self.options.type]()
  if (isToday(self, date)) {
    newStatus += 'today'
  }
  return newStatus as ComponentStatus
}

export function monthYearLink(
  month: number,
  state: DateData
): void {
  if (month === 13) {
    state.month = 1
    state.year += 1
  }
  if (month === 0) {
    state.month = 12
    state.year -= 1
  }
}
