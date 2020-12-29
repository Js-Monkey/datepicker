import {stateDate} from '../../types/store'
import {getDay, getMonth, getYear, joinDate} from '../../utils/date'

export default function (): stateDate {
  const date = new Date()
  const [startYear, startMonth, startDay] = [getYear(date), getMonth(date), getDay(date)]
  return {
    startDate: joinDate(startYear, startMonth, startDay),
    startYear,
    startMonth,
    startDay
  }
}
