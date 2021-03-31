import {ComponentStatus, DateData} from "../../../../../types/store"
import {daysInAMonth, getNext, getPre, joinDate, monthFirstDay} from "../../../../../utils/date"
import {getStatus} from "../month&year/public";
export function updateDays(
  month: number,
  year: number,
  date: string,
  state: DateData
): void {
  const [preMonth, preYear] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state._date.forEach((item, index) => {
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
    item.status = status || getStatus(this, item.date, idx,'date',status)
  })
}
