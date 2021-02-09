import {DateComponents, MonthComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getNext, getYear, joinDate} from '../../utils/date'

const dayComponents = (): DateComponents[] =>
  Array.from({length: 42}).map((_: unknown) => {
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
    start: {
      date: null,
      year: startYear,
      month: startMonth,
      _day: dayComponents(),
      _month: monthComponents()
    },
    end: {
      date: null,
      year: endYear,
      month: endMonth,
      _day: dayComponents(),
      _month: monthComponents()
    },
    today: joinDate(startMonth, startYear, getDay(date))
  }
}
