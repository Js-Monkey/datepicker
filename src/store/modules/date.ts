import {stateDate} from '../../types/store'
import {getMonth, getYear} from '../../utils/date'
export default function (): stateDate {
  const date = new Date()
  return {
    startDate: date,
    startYear: getYear(date),
    startMonth: getMonth(date)
  }
}
