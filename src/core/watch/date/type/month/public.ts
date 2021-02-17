import {ComponentStatus, DateData, State} from "../../../../../types/store"
import {joinDate, monthDiff} from "../../../../../utils/date"

export function updateMonth(year: number, date: string, state: DateData): void {
  state._month.forEach((item, idx) => {
    item.date = joinDate(idx + 1, year)
    item.status = getStatus(this, item.date)
  })
}

export function getStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    month: monthStatus,
    date: monthStatus,
    'month-range': monthRangeStatus
  }
  return typeStatus[self.type as 'month'](self.start.date, date)
}

export function monthStatus(startDate: string | null, date: string): any {
  return monthDiff(startDate, date) ? 'selected' : ''
}

export function monthRangeStatus(rangeStart: string | null, rangeEnd: string | null, date: string): any {
 //todo
}
