import {ComponentStatus, DateData, State} from "../../../../../types/store"
import {daysInAMonth, getNext, getPre, joinDate, monthFirstDay} from "../../../../../utils/date"
import {today} from "../../../../../utils/classes"
import {rangeStatus} from "../public"
import {isDisabledDate} from "../../../../../utils/event"
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
            const date = joinDate(month, year, currentIdx)
            status = otherStatus(this, date)
            return [String(currentIdx), date]
          }
        }
      ;[item.text, item.date] = newDate[status]()
      item.status = mergeClasses(status, isDisabledDate(this, item.date)) as ''
    }
  )
}

function isToday(self: State, date: string) {
  return Date.parse(self.today) === Date.parse(date) ? today : ''
}

const statusLists: any[] = [isToday]

function addStatus(self: State, date: string, status: ComponentStatus): ComponentStatus {
  return statusLists.reduce((cur, handler) => cur + ' ' + handler(self, date), status)
}

export function otherStatus(self: State, date: string): ComponentStatus {
  const typeStatus = {
    date: () => dateStatus(self.start.date, date),
    'date-range': () => rangeStatus(self, date)
  }
  const status = typeStatus[self.type as 'date']()
  return addStatus(self, date, status)
}

export function dateStatus(startDate: string | null, date: string): ComponentStatus {
  return startDate === date ? 'selected' : ''
}

export function monthYearLink(month: number, state: DateData): void {
  if (month === 13) {
    state.month = 1
    state.year += 1
  }
  if (month === 0) {
    state.month = 12
    state.year -= 1
  }
}
