import {DayComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getYear, joinDate} from '../../utils/date'

const dayComponents = (): DayComponents[] =>
  Array.from({length: 42}).map((_: unknown) => {
    return {
      text: '',
      status: '',
      class: '',
      date: ''
    }
  })


export default function (): stateDate {
  const date = new Date()
  const [startYear, startMonth, startDay] = [getYear(date), getMonth(date), null]
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
      day: null,
      components: dayComponents(),
    },
    end: {
      date: joinDate(endYear, endMonth, endDay),
      year: endYear,
      month: endMonth,
      day: null,
      components: dayComponents(),
    },
    today: joinDate(endYear, endMonth, getDay(date))
  }
}
