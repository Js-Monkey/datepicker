import {dateWatcherFn, stateDate} from '../../types/store'
import {getMonth, getYear} from '../../utils/date'

export const dw: dateWatcherFn = {
  startDate(): void {
    //todo
  },
  startYear(): void {
    //todo
  },
  startMonth(): void {
    //todo
  }
}

export default function (): stateDate {
  const date = new Date()
  return {
    startDate: date,
    startYear: getYear(date),
    startMonth: getMonth(date)
  }
}
