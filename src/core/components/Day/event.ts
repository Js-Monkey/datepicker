import {State} from "../../../types/store"
import {DayEvent, HeaderType} from "../../../types/components"
import {handleRange} from "../utils"

export function dayEvent(index: number, type: HeaderType): DayEvent {
  function getDate(state: State): string {
    return state[type]._day[index].date
  }

  return {
    date() {
      this.start.date = getDate(this)
      this.visible = false
    },
    'date-range': handleRange(getDate)
  }
}
