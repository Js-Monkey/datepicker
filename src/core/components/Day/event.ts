import {DateData, DayComponents, State} from "../../../types/store"
import {joinDate} from "../../../utils/date"
import {DayEvent, HeaderType} from "../../../types/components"

export function dayEvent(index: number, type: HeaderType): DayEvent {
  function filterState(state: State): [DateData, DayComponents] {
    const obj = state[type]
    return [obj, obj.components[index]]
  }

  return {
    date(state: State) {
      const [obj, data] = filterState(state)
      obj.day = Number(data.text)
      if (data.status === 'pre') obj.month -= 1
      if (data.status === 'next') obj.month += 1
      obj.date = joinDate(obj.year, obj.month, obj.day)
      state.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler: function (state: State) {
          const [obj, data] = filterState(state)
          if (state.rangeBegin) {
            state.rangeBegin = joinDate(obj.year, obj.month, obj.day)
          } else {
            state.rangeEnd = joinDate(obj.year, obj.month, obj.day)
          }
        }
      }
    ]
  }
}
