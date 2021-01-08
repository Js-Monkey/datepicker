import {addWatch} from "../../../observer/watcher"
import {DateData, State} from "../../../types/store"
import {
  daysInAMonth,
  getNext,
  getPre,
  joinDate,
  monthFirstDay,
} from "../../../utils/date"
import Options from "../../../types/options"
import {isHas} from "../../../utils/helper";

function updateDayComponents(
  month: number,
  year: number,
  state: DateData
): void {
  const [preMonth, preYear] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state.components.forEach(
    (item, index) => {
      const idx = index + 1
      const day =
        index < fd
          ? preDays - fd + idx
          : index < fd + days
          ? idx - fd
          : idx - fd - days
      item.text = String(day)
      item.status =
        index < fd
          ? "pre"
          : idx > fd + days
          ? "next"
          : joinDate(year, month, day) === state.date
            ? "selected"
            : ""
    }
  )
}

function monthYearLink(
  month: number,
  state: DateData
) {
  if (month === 13) {
    state.month = 1
    state.year += 1
  }
  if (month === 0) {
    state.month = 12
    state.year -= 1
  }
}

function endStartLink(em: number, ey: number, state: State): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function startEndLink(em: number, ey: number, state: DateData): void {
  //  [state.month, state.year] = getNext(em, ey)
}

export function watchDate(options: Options): void {
  addWatch({
    key: {
      name: 'start',
      childKey: ['month']
    },
    cb: monthYearLink
  })
  addWatch({
    key: {
      name: 'start',
      childKey: ['month', 'year']
    },
    cb: updateDayComponents,
  })
  if (isHas(options.type, "range")) {
    addWatch({
      key: {
        name: 'end',
        childKey: ["month", "year"]
      },
      cb: updateDayComponents,
    })

    addWatch({
      key: {
        name: 'end',
        childKey: ["month"]
      },
      cb: monthYearLink,
    })
    addWatch({
      key: {
        name: 'end',
        childKey: ['month', 'year']
      },
      cb: endStartLink,
    })
  }
}
