import {DayComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getNext, getYear, joinDate} from '../../utils/date'

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
      components: dayComponents(),
    },
    end: {
      date: null,
      year: endYear,
      month: endMonth,
      components: dayComponents(),
    },
    today: joinDate(startMonth, startYear, getDay(date))
  }
}
