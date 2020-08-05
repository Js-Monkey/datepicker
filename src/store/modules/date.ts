import {getFullYear, getRealMonth, getDay} from '../../utils/date'

export default class storeDate {
  startYear: number
  startMonth: number
  startDay: number
  startDate: Date
  endYear: number | undefined
  endMonth: number | undefined
  endDay: number | undefined

  constructor() {
    const date = new Date()
    this.startDate = date
    this.startYear = getFullYear(date)
    this.startMonth = getRealMonth(date)
    this.startDay = getDay(date)
  }
}
