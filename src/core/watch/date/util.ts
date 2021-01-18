import {ComponentStatus, DateData} from "../../../types/store"
import {dateDiff, daysInAMonth, getNext, getPre, joinDate, monthFirstDay} from "../../../utils/date"


export function updateComponents(
  year: number,
  month: number,
  date: string,
  state: DateData
): void {
  const [preYear, preMonth] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state.components.forEach((item, index) => {
      const idx = index + 1
      const currentIdx = idx - fd
      const newDate = {
        pre() {
          const day = preDays + currentIdx
          return [String(day), joinDate(...getPre(month, year), day)]
        },
        next() {
          const day = currentIdx - days
          return [String(day), joinDate(...getNext(month, year), day)]
        },
        other: () => [String(currentIdx), joinDate(year, month, currentIdx)]
      }
      item.status = index < fd ? 'pre' : fd + days <= index ? 'next' : 'other'
      ;[item.text, item.date] = newDate[item.status]()
    }
  )
}

export function otherStatus(rangeStart: string | null, rangeEnd: string | null, date: string): ComponentStatus {
  let [min, max] = [rangeStart, rangeEnd]
  if (dateDiff(rangeStart, rangeEnd)) {
    min = rangeEnd
    max = rangeStart
  }
  const isMin = date === min
  const isMax = date === max
  if (dateDiff(max, date) && dateDiff(date, min)) {
    return 'inRange'
  } else if (isMax && isMin) {
    return 'range-start range-end'
  } else if (isMin) {
    return 'range-start'
  } else if (isMax) {
    return 'range-end'
  } else {
    return ''
  }
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
