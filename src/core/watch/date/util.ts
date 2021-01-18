import {DateData} from "../../../types/store"
import {daysInAMonth, getNext, getPre, joinDate, monthFirstDay} from "../../../utils/date"

export function updateComponents(
  month: number,
  year: number,
  date: string,
  state: DateData
): void {
  const [preYear, preMonth] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]

  state.components.forEach((item, index) => {
      const idx = index + 1
      const currentIdx = idx - fd
      item.status = index < fd ? 'pre' : fd + days <= index ? 'next' : 'other'
      const newDate = {
          pre() {
            const day = preDays + currentIdx
            return [String(day), joinDate(...getPre(year, month), day)]
          },
          next() {
            const day = currentIdx - days
            return [String(day), joinDate(...getNext(year, month), day)]
          },
          other: () => [String(currentIdx), joinDate(year, month, currentIdx)]
        }

      ;[item.text, item.date] = newDate[item.status]()
    }
  )
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
