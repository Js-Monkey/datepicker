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
  date: string,
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
          : joinDate(year, month, day) === date
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

function endStartLink(this: State, em: number, ey: number): void {
  const data = this.start
  ;[data.month, data.year] = getPre(em, ey)
}

function startEndLink(this: State, em: number, ey: number, state: DateData): void {
  const data = this.end
  ;[data.month, data.year] = getNext(em, ey)
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
      childKey: ['month', 'year', 'date']
    },
    cb: updateDayComponents,
  })
  if (isHas(options.type, "range")) {
    addWatch({
      key: {
        name: 'end',
        childKey: ["month", "year", 'date']
      },
      cb(this: State) {
        updateDayComponents(...(arguments as unknown as [number, number, string, DateData]))
        endStartLink.call(this, ...(arguments as unknown as [number, number]))
      },
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
    addWatch({
      key: {
        name: 'start',
        childKey: ['month', 'year']
      },
      cb: startEndLink,
    })
  }
}
