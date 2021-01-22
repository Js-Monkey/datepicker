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
  const [startYear, startMonth, startDay] = [getYear(date), getMonth(date), null]
  const [endMonth, endYear] = getNext(startMonth, startYear)
  return {
    range: {
      start: null,
      end: null,
      status: 'complete',
    },
    start: {
      date: joinDate(startMonth, startYear, startDay),
      year: startYear,
      month: startMonth,
      day: null,
      components: dayComponents(),
    },
    end: {
      date: joinDate(endMonth, endYear, null),
      year: endYear,
      month: endMonth,
      day: null,
      components: dayComponents(),
    },
    today: joinDate(startMonth, startYear, getDay(date))
  }
}
