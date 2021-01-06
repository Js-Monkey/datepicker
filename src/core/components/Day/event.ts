import {State} from "../../../types/store";
import {joinDate} from "../../../utils/date";
import {DayEvent} from "../../../types/components";

export function dayEvent(index: number, type: string): DayEvent {
  const year = type + 'Year' as 'startYear'
  const month = type + 'Month' as 'startMonth'
  const day = type + 'Day' as 'startDay'
  const date = type + 'Date' as 'startDate'
  const component = type + 'DayComponent' as 'startDayComponent'
  return {
    date(state: State) {
      const data = state[component][index]
      const {text} = data
      state[day] = Number(text)
      if (data.status === 'pre') state[month] -= 1
      if (data.status === 'next') state[month] += 1
      state[date] = joinDate(state[year], state[month], state[day])
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler(state: State) {
          if(state.rangeStatus==='none'){
            const data = state[component][index]
            const {text} = data
            state[day] = Number(text)
            state.rangeBegin = joinDate(state[year], state[month], state[day])
            console.log(state.rangeBegin)
          }
        }
      }
    ]
  }
}
