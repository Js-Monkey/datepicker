import {State} from "../../../types/store";
import {joinDate} from "../../../utils/date";
import {DayEvent} from "../../../types/components";

export function dayEvent(index: number, key: 'startDayComponent'| 'endDayComponent'): DayEvent {
  return {
    date(state: State) {
      const data = state.startDayComponent[index]
      const {text} = data
      state.startDay = Number(text)
      if (data.status === 'pre') state.startMonth -= 1
      if (data.status === 'next') state.startMonth += 1
      state.startDate = joinDate(state.startYear, state.startMonth, state.startDay)
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler(state: State) {
          // if(state.rangeStatus==='none'){
          //   state.rangeBegin =
          // }
        }
      }
    ]
  }
}
