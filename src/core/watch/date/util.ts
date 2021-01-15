import {DateData} from "../../../types/store"
import {daysInAMonth, getPre, joinDate, monthFirstDay} from "../../../utils/date"

export function updateComponents(
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
      let day
      if (index < fd) {
        day = preDays + currentIdx
      } else if (fd + days <= index) {
        day = currentIdx - days
      } else {
        day = fd + days
      }
      // const currentDate = joinDate(year, month, day)
      item.text = String(day)
      item.status = index < fd ? "pre" : index < fd + days ? "" : "next"
      // item.date = !item.status ? currentDate : ''
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
