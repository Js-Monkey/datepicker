import {ComponentStatus, DateData, State} from "../../../../../types/store"
import {joinDate, monthDiff} from "../../../../../utils/date"
import {rangeStatus} from "../public"

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
    'month-range': rangeStatus
  }
  return typeStatus[self.type as 'month'](self, date)
}

export function monthStatus(state: State, date: string): any {
  return monthDiff(state.start.date, date) ? 'selected' : ''
}
