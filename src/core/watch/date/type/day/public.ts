import {ComponentStatus, DateData, State} from "../../../../../types/store"
import {daysInAMonth, getNext, getPre, joinDate, monthFirstDay, isDisabledDate} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"

export function updateDays(
  month: number,
  year: number,
  date: string,
  state: DateData
): void {
  const [preMonth, preYear] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state._day.forEach((item, index) => {
    const idx = index + 1
    const currentIdx = idx - fd
    const status: ComponentStatus = index < fd ? 'pre' : fd + days <= index ? 'next' : ''
    const newDate = {
        pre() {
          const day = preDays + currentIdx
          return [String(day), joinDate(getPre(month, year), day)]
        },
        next() {
          const day = currentIdx - days
          return [String(day), joinDate(getNext(month, year), day)]
        },
        other() {
          const date = joinDate(month, year, currentIdx)
          return [String(currentIdx), date]
        }
      }
    ;[item.text, item.date] = newDate[status || 'other']()
    item.status = status || moreStatus(this, item.date, status)
  })
}

export function moreStatus(self: State, date: string, preStatus = ''): ComponentStatus {
  const typeStatus = {
    date: () => self.start.date === date ? 'selected' : '',
    'date-range': () => rangeStatus(self, date)
  }

  function isToday() {
    return Date.parse(self.today) === Date.parse(date) ? 'today' : ''
  }

  const status = typeStatus[self.type as 'date']()
  const isDisabled = isDisabledDate(self, date)
  return mergeClasses(status, isDisabled, isToday(), preStatus) as ''
}
