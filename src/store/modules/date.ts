import {DateComponents, DateData, MonthComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getNext, getYear, joinDate} from '../../utils/date'

const dayComponents = (): DateComponents[] =>
  Array.from({length: 42}).map(() => {
    return {
      text: '',
      status: '',
      date: ''
    }
  })

const monthComponents = (): MonthComponents[] =>
  Array.from({length: 12}).map(() => {
    return {
      status: '',
      date: ''
    }
  })

function rangeComponents(month: number,year: number): DateData{
  return {
    date: null,
    year,
    month,
    _day: dayComponents(),
    _month: monthComponents()
  }
}

export default function (): stateDate {
  const date = new Date()
  const [startYear, startMonth] = [getYear(date), getMonth(date)]
  const [endMonth, endYear] = getNext(startMonth, startYear)
  return {
    range: {
      start: null,
      end: null,
      status: 'complete',
    },
    start: rangeComponents(startMonth, startYear),
    end: rangeComponents(endMonth, endYear),
    today: joinDate(startMonth, startYear, getDay(date))
  }
}
