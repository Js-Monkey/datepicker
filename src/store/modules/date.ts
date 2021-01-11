import {DayComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getYear, joinDate} from '../../utils/date'

const dayComponents = (): DayComponents[] =>
  Array.from({length: 42}).map((_: unknown) => {
    return {
      text: '',
      status: '',
      class: ''
    }
  })


export default function (): stateDate {
  const date = new Date()
  const [startYear, startMonth, startDay] = [getYear(date), getMonth(date), getDay(date)]
  const [endYear, endMonth, endDay] = [getYear(date), getMonth(date), null]
  return {
    range:{
      start: null,
      end: null,
      status: 'complete',
    },
    start: {
      date: joinDate(startYear, startMonth, startDay),
      year: startYear,
      month: startMonth,
      day: startDay,
      components: dayComponents(),
    },
    end: {
      date: joinDate(endYear, endMonth, endDay),
      year: 2021,
      month: 1,
      day: 8,
      components: dayComponents(),
    }
  }
}
